import React, { useState, ChangeEvent } from 'react';
import { Button, Input, Checkbox } from 'antd';
import {
    AutoComplete,
    Cascader,
    Col,
    Form,
    InputNumber,
    Row,
    Select,
} from 'antd';
import AddTodo from './utils/AddTodo';
import TaskList from './utils/TaskList';
import type { CheckboxProps, CascaderProps, AutoCompleteProps } from 'antd';

const { Option } = Select;

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>['options'] = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const App = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(
                ['.com', '.org', '.net'].map((domain) => `${value}${domain}`)
            );
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    function createTodos() {
        console.log('1');
    }
    // const [todos, setTodos] = useState(() => createTodos());

    // 为组件添加状态
    const [age, setAge] = useState(42);
    const [name, setName] = useState('Taylor');
    const [text, setText] = useState('hello');
    const [check, setCheck] = useState(false);

    const [newName, setNewName] = useState('小明');
    const [newAge, setNewAge] = useState(18);
    function handleClick() {
        setName('Robin');
        setAge((a) => a + 2);
        setText('hello');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('当前事件对象', e);
        setText(e?.target?.value);
    };

    const checkChange: CheckboxProps['onChange'] = () => {
        setCheck(() => !check);
    };

    const [options, setOptions] = React.useState<AutoCompleteProps['options']>(
        []
    );
    const handleSearch = (value: string) => {
        setOptions(() => {
            if (!value || value.includes('@')) {
                return [];
            }
            return ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
                label: `${value}@${domain}`,
                value: `${value}@${domain}`,
            }));
        });
    };

    const [aform, setAform] = useState({
        firstName: 'bar',
        lastName: 'hep',
        email: 'a.com',
        artwork: {
            title: '1',
            city: '2',
        },
    });
    let nextId = 3;
    const initialTodos = [
        { id: 0, title: 'Buy milk', done: true },
        { id: 1, title: 'Eat tacos', done: false },
        { id: 2, title: 'Brew tea', done: false },
    ];
    const [todos, setTodos] = useState(initialTodos);
    const handleAddTodo = (title: string) => {
        setTodos([
            ...todos,
            {
                id:
                    todos.length > 3
                        ? Math.max(...todos.map((todo) => todo.id)) + 1
                        : 3,
                title: title,
                done: false,
            },
        ]);
    };

    const handleChangeTodo = (nextTodo: any) => {
        setTodos(
            todos.map((t) => {
                if (t.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return t;
                }
            })
        );
    };

    const handleDeleteTodo = (todoId: any) => {
        console.log(todoId);
        setTodos(todos.filter((t) => t.id !== todoId));
    };
    return (
        <>
            <div>
                {name}
                <div>{age}</div>

                <div>
                    <Input
                        value={text}
                        onChange={handleChange}
                        placeholder="Basic usage"
                    />
                    {text}
                </div>

                <div>
                    <Checkbox checked={check} onChange={checkChange}>
                        {check ? 'check' : 'no check'}
                    </Checkbox>
                </div>
                <Button onClick={() => handleClick()} type="primary">
                    Primary Button
                </Button>

                <div>
                    <Input
                        value={newName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNewName(e.target.value)
                        }
                        placeholder="Basic usage"
                    />
                    <Button
                        type="primary"
                        onClick={() => setNewAge(newAge + 1)}
                    >
                        按钮
                    </Button>
                    Hello,{newName}, you are {newAge}
                </div>
            </div>

            <div>
                {/* 表单对象 */}
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <AutoComplete
                            allowClear
                            onSearch={handleSearch}
                            placeholder="input here"
                            options={options}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password autoComplete="new-password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm111"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The new password that you entered do not match!'
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password autoComplete="new-password" />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="Nickname"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your nickname!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="residence"
                        label="Habitual Residence"
                        rules={[
                            {
                                type: 'array',
                                required: true,
                                message:
                                    'Please select your habitual residence!',
                            },
                        ]}
                    >
                        <Cascader options={residences} />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="donation"
                        label="Donation"
                        rules={[
                            {
                                required: true,
                                message: 'Please input donation amount!',
                            },
                        ]}
                    >
                        <InputNumber
                            addonAfter={suffixSelector}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="website"
                        label="Website"
                        rules={[
                            {
                                required: true,
                                message: 'Please input website!',
                            },
                        ]}
                    >
                        <AutoComplete
                            options={websiteOptions}
                            onChange={onWebsiteChange}
                            placeholder="website"
                        >
                            <Input />
                        </AutoComplete>
                    </Form.Item>

                    <Form.Item
                        name="intro"
                        label="Intro"
                        rules={[
                            { required: true, message: 'Please input Intro' },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}
                    >
                        <Select placeholder="select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Captcha"
                        extra="We must make sure that your are a human."
                    >
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input the captcha you got!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button>Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              new Error(
                                                  'Should accept agreement'
                                              )
                                          ),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div>
                <label>
                    First name
                    <input
                        type="text"
                        value={aform.firstName}
                        onChange={(e) => {
                            setAform({
                                ...aform,
                                firstName: e.target.value,
                            });
                        }}
                    />
                </label>
                <label>
                    last name
                    <input
                        type="text"
                        value={aform.lastName}
                        onChange={(e) => {
                            setAform({
                                ...aform,
                                lastName: e.target.value,
                            });
                        }}
                    />
                </label>
                <label>
                    title name
                    <input
                        type="text"
                        value={aform.email}
                        onChange={(e) => {
                            setAform({
                                ...aform,
                                email: e.target.value,
                            });
                        }}
                    />
                </label>
                <label>
                    city name
                    <input
                        type="text"
                        value={aform.artwork.city}
                        onChange={(e) => {
                            setAform({
                                ...aform,
                                artwork: {
                                    ...aform.artwork,
                                    city: e.target.value,
                                },
                            });
                        }}
                    />
                </label>

                <label>
                    First name
                    <input
                        type="text"
                        value={aform.artwork.title}
                        onChange={(e) => {
                            setAform({
                                ...aform,
                                artwork: {
                                    ...aform.artwork,
                                    title: e.target.value,
                                },
                            });
                        }}
                    />
                </label>
                <div>
                    {aform.firstName} {aform.lastName} {aform.email}
                    {aform.artwork.title} {aform.artwork.city}
                </div>
            </div>

            <div>
                <AddTodo onAddTodo={handleAddTodo}></AddTodo>
                <TaskList
                    todos={todos}
                    onChangeTodo={handleChangeTodo}
                    onDeleteTodo={handleDeleteTodo}
                ></TaskList>
            </div>
        </>
    );
};

export default App;
