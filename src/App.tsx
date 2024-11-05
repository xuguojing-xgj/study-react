import React, { CSSProperties } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import cs from 'classnames';

import './css/03-index.scss';

interface CalendarProps {
    value: Dayjs;
    // style 和 className 用于修改 Calendar 组件外层容器
    style?: CSSProperties;
    className?: string | string[];
    // 定制日期显示, 会完全覆盖日期单元格
    dateRender?: (currentDate: Dayjs) => React.ReactNode;
    // 定制日期单元格, 内容会被添加到单元格内, 只在全屏日历模式下生效
    dateInnerContent?: (currentDate: Dayjs) => React.ReactNode;
    // 国际化相关
    locale?: string;
    onChange?: (date: Dayjs) => void;
}

interface MonthCalendarProps extends CalendarProps {}

const getAllDays = (date: Dayjs) => {
    // const dayjsInMonth = date.daysInMonth();
    const startDate = date.startOf('month');
    const day = startDate.day();

    const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
        6 * 7
    );
    for (let i = 0; i < day; i++) {
        daysInfo[i] = {
            date: startDate.subtract(day - i, 'day'),
            currentMonth: false,
        };
    }

    for (let i = day; i < daysInfo.length; i++) {
        const calcDate = startDate.add(i - day, 'day');
        daysInfo[i] = {
            date: startDate.add(i - day, 'day'),
            currentMonth: calcDate.month() === date.month(),
        };
    }

    return daysInfo;
};

const renderDays = (days: Array<{ date: Dayjs; currentMonth: boolean }>) => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j];
            row[j] = (
                <div
                    key={j}
                    className={
                        'calendar-month-body-cell ' +
                        (item.currentMonth
                            ? 'calendar-month-body-cell-current'
                            : '')
                    }
                >
                    {item.date.date()}
                </div>
            );
        }
        rows.push(row);
    }
    return rows.map((row, index) => (
        <div key={index} className="calendar-month-body-row">
            {row}
        </div>
    ));
};

const Header = () => {
    return (
        <div className="calendar-header">
            <div className="calendar-header-left">
                <div className="calendar-header-icon">& lt; </div>
                <div className="calendar-header-value"> 2024 - 10 - 26 </div>
                <div className="calendar-header-icon">& gt; </div>
                <button className="calendar-header-btn"> 今天 </button>
            </div>
        </div>
    );
};

const MonthCalendatr = (props: MonthCalendarProps) => {
    console.log(props);

    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const allDays = getAllDays(props.value);
    return (
        <div className="calendar-month">
            <div className="calendar-month-week-list">
                {weekList.map((item) => (
                    <div className="calendar-month-week-list-item" key={item}>
                        {item}
                    </div>
                ))}
            </div>

            <div className="calendar-month-body"> {renderDays(allDays)} </div>
        </div>
    );
};

const Calendar = (props: CalendarProps) => {
    const { value, style, className } = props;
    const classNames = cs('calendar', className);
    console.log(classNames);
    return (
        <div className={classNames} style={style}>
            <Header></Header>
            <MonthCalendatr {...props} />
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Calendar value={dayjs()}> </Calendar>
        </div>
    );
};
export default App;
