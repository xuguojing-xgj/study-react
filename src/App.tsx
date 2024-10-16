import React, {
    useState,
    useEffect,
    ForwardRefRenderFunction,
    useRef,
    useImperativeHandle,
} from 'react';
import './css/02-index.css';
import { useControllableValue } from 'ahooks';
interface CalendarProps {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
}

interface CalendarRef {
    getDate: () => void;
    setDate: (date: Date) => void;
}

const InternalCalendar: ForwardRefRenderFunction<CalendarProps, CalendarRef> = (
    props: CalendarProps,
    ref: CalendarRef
) => {
    const { value, defaultValue, onChange } = props;
    console.log(props);
    const [date, setDate] = useControllableValue(props, {
        defaultValue: new Date(),
    });
    useImperativeHandle(ref, () => {
        return {
            getDate() {
                return date;
            },
            setDate(date: Date) {
                setDate(date);
            },
        };
    });
    const handleprevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    const monthNames = [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
    ];

    const daysOfMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (year: number, month: number) => {
        // 返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天，
        return new Date(year, month, 1).getDay();
    };

    const renderDates = () => {
        const days = [];
        const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
        const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty"></div>);
        }

        for (let i = 1; i <= daysCount; i++) {
            const clickHandler = () => {
                const currentDate = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    i
                );
                setDate(currentDate);
                // onChange?.(currentDate);
            };
            const isToday = i === date.getDate();
            days.push(
                <div
                    key={i}
                    className={`day ${isToday ? 'selected' : ''}`}
                    onClick={() => clickHandler()}
                >
                    {i}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handleprevMonth}>&lt;</button>
                <div>
                    {date.getFullYear()}年{monthNames[date.getMonth()]}
                </div>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="days">
                <div className="day">日</div>
                <div className="day">一</div>
                <div className="day">二</div>
                <div className="day">三</div>
                <div className="day">四</div>
                <div className="day">五</div>
                <div className="day">六</div>
                {renderDates()}
            </div>
        </div>
    );
};

const Calendar = React.forwardRef(InternalCalendar);

const App = () => {
    const calendarRef = useRef<CalendarRef>(null);

    useEffect(() => {
        console.log(calendarRef.current?.getDate().toLocaleDateString());

        setTimeout(() => {
            calendarRef.current?.setDate(new Date(2044, 10, 0));
        }, 3000);
    }, []);
    return (
        <div>
            {/* <Calendar
                ref={calendarRef}
                defaultValue={new Date('2024-10-16')}
            ></Calendar> */}
            <Calendar
                value={new Date('2023-3-1')}
                onChange={(date: Date) => {
                    alert(date.toLocaleDateString());
                }}
            ></Calendar>
            <Calendar
                defaultValue={new Date('2023-8-1')}
                onChange={(date: Date) => {
                    alert(date.toLocaleDateString());
                }}
            ></Calendar>
        </div>
    );
};

export default App;
