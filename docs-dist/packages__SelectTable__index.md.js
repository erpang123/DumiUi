(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    '9kvl': function(e, n, t) {
      'use strict';
      var a = t('FfOG');
      t.d(n, 'a', function() {
        return a['b'];
      });
      t('bCY9');
    },
    FBQm: function(e, n, t) {},
    Rsk4: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('HaE+'),
        l = t('o0o1'),
        r = t.n(l),
        o = t('rlch'),
        s =
          ".require-icon::before {\n  display: inline-block;\n  margin-right: 4px;\n  color: #ff4d4f;\n  font-size: 14px;\n  font-family: SimSun, sans-serif;\n  line-height: 1;\n  content: '*';\n}\n\n.editable-row {\n  position: relative;\n  .ant-form-item {\n    .ant-form-item-explain {\n      position: absolute;\n      bottom: -22px;\n    }\n  }\n}";
      n['default'] = {
        'method-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              var e = (0, l.setObjToStr)({ a: 11, b: 22 }),
                                n = (0, l.formatTime)(5600100, 'hh:mm:ss');
                              return a['default'].createElement(
                                'div',
                                null,
                                a['default'].createElement(
                                  'p',
                                  null,
                                  'setObjToStr(',
                                  JSON.stringify({ a: 11, b: 22 }),
                                  ')\u7684\u6267\u884c\u7ed3\u679c\u4e3a\uff1a',
                                  e,
                                ),
                                a['default'].createElement(
                                  'p',
                                  null,
                                  "formatTime(5600100, 'hh:mm:ss')\u7684\u6267\u884c\u7ed3\u679c\u4e3a: ",
                                  n,
                                ),
                              );
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React from 'react';\nimport { setObjToStr, formatTime } from 'fudata-ui';\n\nexport default () => {\n  const str = setObjToStr({\n    a: 11,\n    b: 22,\n  });\n  const nowT = formatTime(5600100, 'hh:mm:ss');\n  return (\n    <div>\n      <p>\n        setObjToStr({JSON.stringify({ a: 11, b: 22 })})\u7684\u6267\u884c\u7ed3\u679c\u4e3a\uff1a{str}\n      </p>\n      <p>formatTime(5600100, 'hh:mm:ss')\u7684\u6267\u884c\u7ed3\u679c\u4e3a: {nowT}</p>\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'method',
            identifier: 'method-demo',
          },
        },
        'method-demo-1': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o, s, i, u;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('284h')),
                            (a = t('TqRt')),
                            (e.t0 = a),
                            (e.next = 5),
                            t.e(9).then(t.bind(null, 'ODXe'))
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (l = (0, e.t0)(e.t1)),
                            (e.t2 = n),
                            (e.next = 10),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 10:
                          return (
                            (e.t3 = e.sent),
                            (o = (0, e.t2)(e.t3)),
                            (e.next = 14),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 14:
                          return (
                            (s = e.sent),
                            (e.next = 17),
                            Promise.all([
                              t.e(0),
                              t.e(2),
                              t.e(1),
                              t.e(7),
                              t.e(8),
                            ]).then(t.bind(null, 'gdfu'))
                          );
                        case 17:
                          return (
                            (i = e.sent),
                            (u = function() {
                              var e = (0, o.useState)(
                                  '\u83b7\u53d6\u9a8c\u8bc1\u7801',
                                ),
                                n = (0, l['default'])(e, 2),
                                t = n[0],
                                a = n[1];
                              (0, s.useInterval)(
                                function() {
                                  '\u83b7\u53d6\u9a8c\u8bc1\u7801' === t
                                    ? (t = 60)
                                    : t--,
                                    a(t);
                                },
                                '\u83b7\u53d6\u9a8c\u8bc1\u7801' === t || t <= 0
                                  ? null
                                  : 1e3,
                              );
                              var r = function() {
                                '\u83b7\u53d6\u9a8c\u8bc1\u7801' === t && a(60);
                              };
                              return o['default'].createElement(
                                'div',
                                null,
                                o['default'].createElement(
                                  i.Button,
                                  {
                                    type: 'primary',
                                    disabled:
                                      '\u83b7\u53d6\u9a8c\u8bc1\u7801' !== t,
                                    onClick: r,
                                  },
                                  t,
                                ),
                              );
                            }),
                            e.abrupt('return', u)
                          );
                        case 20:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState, useEffect } from 'react';\nimport { useInterval, usePrevious } from 'fudata-ui';\nimport { Button } from 'antd';\n\nexport default () => {\n  let [nowCount, setNowCount] = useState('\u83b7\u53d6\u9a8c\u8bc1\u7801');\n\n  useInterval(\n    () => {\n      if (nowCount === '\u83b7\u53d6\u9a8c\u8bc1\u7801') {\n        nowCount = 60;\n      } else {\n        nowCount--;\n      }\n      setNowCount(nowCount);\n    },\n    nowCount === '\u83b7\u53d6\u9a8c\u8bc1\u7801' || nowCount <= 0 ? null : 1000,\n  );\n  // const count = usePrevious(111)\n  // console.log(count)\n\n  // useEffect(() => {\n  //   setTimeout(() => {\n  //     setNowCount(2222)\n  //   }, 5000)\n  // }, [])\n\n  const codeMath = () => {\n    if (nowCount === '\u83b7\u53d6\u9a8c\u8bc1\u7801') {\n      setNowCount(60);\n    }\n  };\n\n  return (\n    <div>\n      <Button\n        type=\"primary\"\n        disabled={nowCount !== '\u83b7\u53d6\u9a8c\u8bc1\u7801'}\n        onClick={codeMath}\n      >\n        {nowCount}\n      </Button>\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'fudata-ui': { version: '1.0.2-2' },
              antd: { version: '4.16.13', css: 'antd/dist/antd.css' },
              'react-dom': { version: '>=16.9.0' },
            },
            componentName: 'method',
            identifier: 'method-demo-1',
          },
        },
        'Button-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              return a['default'].createElement(
                                'div',
                                null,
                                a['default'].createElement(
                                  l.Button,
                                  null,
                                  '\u9ed8\u8ba4\u6309\u94ae',
                                ),
                                a['default'].createElement(
                                  l.Button,
                                  { type: 'primary' },
                                  '\u4e3b\u8981\u6309\u94ae',
                                ),
                                a['default'].createElement(
                                  l.Button,
                                  { type: 'success' },
                                  '\u6210\u529f\u6309\u94ae',
                                ),
                                a['default'].createElement(
                                  l.Button,
                                  { type: 'info' },
                                  '\u4fe1\u606f\u6309\u94ae',
                                ),
                                a['default'].createElement(
                                  l.Button,
                                  { type: 'warning' },
                                  '\u8b66\u544a\u6309\u94ae',
                                ),
                                a['default'].createElement(
                                  l.Button,
                                  { type: 'danger' },
                                  '\u5371\u9669\u6309\u94ae',
                                ),
                              );
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  'import React from \'react\';\nimport { Button } from \'fudata-ui\';\nexport default () => (\n  <div>\n    <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button type="info">\u4fe1\u606f\u6309\u94ae</Button>\n    <Button type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button type="danger">\u5371\u9669\u6309\u94ae</Button>\n  </div>\n);',
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'Button',
            identifier: 'Button-demo',
          },
        },
        'CountDown-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              var e = {
                                onClick: function() {
                                  console.log(111);
                                },
                                disabled: !1,
                                startTime: 10,
                              };
                              return a['default'].createElement(l.CountDown, e);
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React from 'react';\nimport { CountDown } from 'fudata-ui';\n\nexport default () => {\n  const downProps = {\n    onClick() {\n      console.log(111);\n    },\n    disabled: false,\n    startTime: 10,\n  };\n  return <CountDown {...downProps} />;\n};",
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'CountDown',
            identifier: 'CountDown-demo',
          },
        },
        'Form-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o, s, i, u;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('284h')),
                            (a = t('TqRt')),
                            (e.t0 = a),
                            (e.next = 5),
                            Promise.resolve().then(t.bind(null, 'wx14'))
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (l = (0, e.t0)(e.t1)),
                            (e.t2 = n),
                            (e.next = 10),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 10:
                          return (
                            (e.t3 = e.sent),
                            (o = (0, e.t2)(e.t3)),
                            (e.next = 14),
                            Promise.all([
                              t.e(0),
                              t.e(2),
                              t.e(1),
                              t.e(7),
                              t.e(8),
                            ]).then(t.bind(null, 'gdfu'))
                          );
                        case 14:
                          return (
                            (s = e.sent),
                            (e.next = 17),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 17:
                          return (
                            (i = e.sent),
                            (u = function() {
                              var e = (0, o.useRef)(),
                                n = function() {
                                  var n = e.current.getFieldsValue();
                                  console.log('\u70b9\u51fb\u6309\u94ae', n);
                                },
                                t = function() {
                                  e.current.resetFields();
                                },
                                a = function() {
                                  e.current.setFieldsValue({
                                    username: 'admin',
                                    note: 'Hello world!',
                                    sex: 'boy',
                                    gender: 'male',
                                    adree: 'hangzhou',
                                  });
                                },
                                r = {
                                  formProps: {
                                    initialValues: {
                                      headUrl:
                                        'https://filebuck.oss-cn-hangzhou.aliyuncs.com/fsUpload/03cc1b5f20af25b9_154x154.png',
                                    },
                                    labelCol: { span: 6 },
                                    wrapperCol: { span: 18 },
                                  },
                                  dataList: [
                                    {
                                      type: 'Input',
                                      label: 'Username',
                                      name: 'username',
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            'Please input your username!',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'Input',
                                      label: 'Note',
                                      name: 'note',
                                      rules: [
                                        {
                                          required: !0,
                                          message: 'Please input your note!',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'DatePicker',
                                      label: '\u65f6\u95f4',
                                      name: 'time',
                                      defaultPicker: {
                                        picker: 'month',
                                        onChange: function(e) {
                                          console.log(e);
                                        },
                                      },
                                    },
                                    {
                                      type: 'DatePicker',
                                      dateType: 'RangePicker',
                                      label: '\u65f6\u95f4\u533a\u95f4',
                                      name: 'timeRange',
                                      defaultPicker: {
                                        showTime: { format: 'HH:mm' },
                                        format: 'YYYY-MM-DD HH:mm',
                                        onChange: function(e) {
                                          console.log(e);
                                        },
                                      },
                                    },
                                    {
                                      type: 'radio',
                                      label: 'Sex',
                                      name: 'sex',
                                      option: [
                                        { sendValue: 'boy', showValue: 'boy' },
                                        {
                                          sendValue: 'gril',
                                          showValue: 'gril',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'checkbox',
                                      label: 'city',
                                      name: 'city',
                                      checkProps: {
                                        options: [
                                          { label: 'hangzhou', value: '1' },
                                          { label: 'ningbo', value: '2' },
                                        ],
                                      },
                                    },
                                    {
                                      type: 'Select',
                                      label: 'Gender',
                                      name: 'gender',
                                      allowClear: !0,
                                      optionLists: [
                                        {
                                          sendValue: 'male',
                                          showValue: 'male',
                                        },
                                        {
                                          sendValue: 'female',
                                          showValue: 'female',
                                        },
                                        {
                                          sendValue: 'other',
                                          showValue: 'other',
                                        },
                                      ],
                                      onChange: function(n) {
                                        var t = e.current;
                                        switch ((console.log(t), n)) {
                                          case 'male':
                                            t.setFieldsValue({
                                              note: 'Hi, man!',
                                            });
                                            break;
                                          case 'female':
                                            t.setFieldsValue({
                                              note: 'Hi, lady!',
                                            });
                                            break;
                                          case 'other':
                                            t.setFieldsValue({
                                              note: 'Hi there!',
                                            });
                                            break;
                                          default:
                                            break;
                                        }
                                        console.log(n);
                                      },
                                    },
                                    {
                                      type: 'treeSelect',
                                      key: 'adree',
                                      label: 'adree',
                                      name: 'adree',
                                      list: [
                                        {
                                          value: 'zhejiang',
                                          title: '\u6d59\u6c5f',
                                          children: [
                                            {
                                              value: 'hangzhou',
                                              title: '\u676d\u5dde',
                                              children: [
                                                {
                                                  value: 'yuhang',
                                                  title: '\u4f59\u676d',
                                                },
                                                {
                                                  value: 'gongshu',
                                                  title: '\u62f1\u5885',
                                                },
                                              ],
                                            },
                                            {
                                              value: 'ningbo',
                                              title: '\u5b81\u6ce2',
                                              children: [
                                                {
                                                  value: 'jiangbei',
                                                  title: o[
                                                    'default'
                                                  ].createElement(
                                                    'b',
                                                    {
                                                      style: { color: '#08c' },
                                                    },
                                                    '\u6c5f\u5317',
                                                  ),
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: 'slot',
                                      key: 'slot',
                                      selfLayout: {
                                        wrapperCol: { offset: 8, span: 16 },
                                      },
                                      slotComponent: function() {
                                        return o['default'].createElement(
                                          o['default'].Fragment,
                                          null,
                                          o['default'].createElement(
                                            s.Button,
                                            {
                                              className: 'submit-btn',
                                              type: 'primary',
                                              onClick: n,
                                              htmlType: 'submit',
                                            },
                                            'Submit',
                                          ),
                                          o['default'].createElement(
                                            s.Button,
                                            {
                                              className: 'reset-btn',
                                              onClick: t,
                                              htmlType: 'button',
                                              style: { marginLeft: '8px' },
                                            },
                                            'Reset',
                                          ),
                                          o['default'].createElement(
                                            s.Button,
                                            {
                                              className: 'set-default-btn',
                                              type: 'link',
                                              htmlType: 'button',
                                              style: { marginLeft: '8px' },
                                              onClick: a,
                                            },
                                            'Fill form',
                                          ),
                                        );
                                      },
                                    },
                                  ],
                                };
                              return o['default'].createElement(
                                'div',
                                { style: { width: '400px' } },
                                o['default'].createElement(
                                  i.Form,
                                  (0, l['default'])(
                                    {
                                      onRef: function(n) {
                                        return (e.current = n);
                                      },
                                    },
                                    r,
                                  ),
                                ),
                              );
                            }),
                            e.abrupt('return', u)
                          );
                        case 20:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState, useRef } from 'react';\nimport { Button } from 'antd';\nimport { Form } from 'fudata-ui';\nexport default () => {\n  const formRef = useRef();\n\n  const onSubmit = () => {\n    const value = formRef.current.getFieldsValue();\n    console.log('\u70b9\u51fb\u6309\u94ae', value);\n  };\n\n  const onReset = () => {\n    formRef.current.resetFields();\n  };\n\n  const onFill = () => {\n    formRef.current.setFieldsValue({\n      username: 'admin',\n      note: 'Hello world!',\n      sex: 'boy',\n      gender: 'male',\n      adree: 'hangzhou',\n    });\n  };\n\n  const rFormProps = {\n    formProps: {\n      initialValues: {\n        headUrl:\n          'https://filebuck.oss-cn-hangzhou.aliyuncs.com/fsUpload/03cc1b5f20af25b9_154x154.png',\n      },\n      labelCol: { span: 6 },\n      wrapperCol: { span: 18 },\n    },\n    dataList: [\n      {\n        type: 'Input',\n        label: 'Username',\n        name: 'username',\n        rules: [{ required: true, message: 'Please input your username!' }],\n      },\n      {\n        type: 'Input',\n        label: 'Note',\n        name: 'note',\n        rules: [{ required: true, message: 'Please input your note!' }],\n      },\n      // {\n      //   type: 'upload',\n      //   label: 'headImg',\n      //   name: 'headUrl',\n      //   uploadProps: {\n      //     limitType: ['image/jpeg', 'image/jpg', 'image/png'],\n      //     unit: 'MB',\n      //     errText: '\u4ec5\u652f\u6301jpg png\u683c\u5f0f\u56fe\u7247!'\n      //   }\n      // },\n      {\n        type: 'DatePicker',\n        label: '\u65f6\u95f4',\n        name: 'time',\n        defaultPicker: {\n          picker: 'month',\n          onChange(value) {\n            console.log(value);\n          },\n        },\n      },\n      {\n        type: 'DatePicker',\n        dateType: 'RangePicker',\n        label: '\u65f6\u95f4\u533a\u95f4',\n        name: 'timeRange',\n        defaultPicker: {\n          showTime: { format: 'HH:mm' },\n          format: 'YYYY-MM-DD HH:mm',\n          onChange(value) {\n            console.log(value);\n          },\n        },\n      },\n      {\n        type: 'radio',\n        label: 'Sex',\n        name: 'sex',\n        option: [\n          {\n            sendValue: 'boy',\n            showValue: 'boy',\n          },\n          {\n            sendValue: 'gril',\n            showValue: 'gril',\n          },\n        ],\n      },\n      {\n        type: 'checkbox',\n        label: 'city',\n        name: 'city',\n        checkProps: {\n          options: [\n            {\n              label: 'hangzhou',\n              value: '1',\n            },\n            {\n              label: 'ningbo',\n              value: '2',\n            },\n          ],\n        },\n      },\n      {\n        type: 'Select',\n        label: 'Gender',\n        name: 'gender',\n        allowClear: true,\n        optionLists: [\n          {\n            sendValue: 'male',\n            showValue: 'male',\n          },\n          {\n            sendValue: 'female',\n            showValue: 'female',\n          },\n          {\n            sendValue: 'other',\n            showValue: 'other',\n          },\n        ],\n        onChange: value => {\n          const form = formRef.current;\n          console.log(form);\n          switch (value) {\n            case 'male':\n              form.setFieldsValue({\n                note: 'Hi, man!',\n              });\n              break;\n\n            case 'female':\n              form.setFieldsValue({\n                note: 'Hi, lady!',\n              });\n              break;\n\n            case 'other':\n              form.setFieldsValue({\n                note: 'Hi there!',\n              });\n              break;\n\n            default:\n              break;\n          }\n          console.log(value);\n        },\n      },\n      {\n        type: 'treeSelect',\n        key: 'adree',\n        label: 'adree',\n        name: 'adree',\n        list: [\n          {\n            value: 'zhejiang',\n            title: '\u6d59\u6c5f',\n            children: [\n              {\n                value: 'hangzhou',\n                title: '\u676d\u5dde',\n                children: [\n                  {\n                    value: 'yuhang',\n                    title: '\u4f59\u676d',\n                  },\n                  {\n                    value: 'gongshu',\n                    title: '\u62f1\u5885',\n                  },\n                ],\n              },\n              {\n                value: 'ningbo',\n                title: '\u5b81\u6ce2',\n                children: [\n                  {\n                    value: 'jiangbei',\n                    title: <b style={{ color: '#08c' }}>\u6c5f\u5317</b>,\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        type: 'slot',\n        key: 'slot',\n        selfLayout: {\n          wrapperCol: {\n            offset: 8,\n            span: 16,\n          },\n        },\n        slotComponent: () => {\n          return (\n            <>\n              <Button\n                className=\"submit-btn\"\n                type=\"primary\"\n                onClick={onSubmit}\n                htmlType=\"submit\"\n              >\n                Submit\n              </Button>\n              <Button\n                className=\"reset-btn\"\n                onClick={onReset}\n                htmlType=\"button\"\n                style={{ marginLeft: '8px' }}\n              >\n                Reset\n              </Button>\n              <Button\n                className=\"set-default-btn\"\n                type=\"link\"\n                htmlType=\"button\"\n                style={{ marginLeft: '8px' }}\n                onClick={onFill}\n              >\n                Fill form\n              </Button>\n            </>\n          );\n        },\n      },\n    ],\n  };\n\n  return (\n    <div style={{ width: '400px' }}>\n      <Form onRef={ref => (formRef.current = ref)} {...rFormProps}></Form>\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              antd: { version: '4.16.13', css: 'antd/dist/antd.css' },
              'fudata-ui': { version: '1.0.2-2' },
              'react-dom': { version: '>=16.9.0' },
            },
            componentName: 'Form',
            identifier: 'Form-demo',
          },
        },
        'Form-demo-1': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o, s, i, u;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('284h')),
                            (a = t('TqRt')),
                            (e.t0 = a),
                            (e.next = 5),
                            Promise.resolve().then(t.bind(null, 'wx14'))
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (l = (0, e.t0)(e.t1)),
                            (e.t2 = n),
                            (e.next = 10),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 10:
                          return (
                            (e.t3 = e.sent),
                            (o = (0, e.t2)(e.t3)),
                            (e.next = 14),
                            Promise.all([
                              t.e(0),
                              t.e(2),
                              t.e(1),
                              t.e(7),
                              t.e(8),
                            ]).then(t.bind(null, 'gdfu'))
                          );
                        case 14:
                          return (
                            (s = e.sent),
                            (e.next = 17),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 17:
                          return (
                            (i = e.sent),
                            (u = function() {
                              var e = (0, o.useRef)(),
                                n = {
                                  formProps: { layout: 'inline' },
                                  dataList: [
                                    { type: 'Input', name: 'username' },
                                    {
                                      type: 'DatePicker',
                                      dateType: 'RangePicker',
                                      name: 'timeRange',
                                      defaultPicker: {
                                        showTime: { format: 'HH:mm' },
                                        format: 'YYYY-MM-DD HH:mm',
                                        onChange: function(e) {
                                          console.log(e);
                                        },
                                      },
                                    },
                                    {
                                      type: 'Select',
                                      name: 'gender',
                                      allowClear: !0,
                                      optionLists: [
                                        {
                                          sendValue: 'male',
                                          showValue: 'male',
                                        },
                                        {
                                          sendValue: 'female',
                                          showValue: 'female',
                                        },
                                        {
                                          sendValue: 'other',
                                          showValue: 'other',
                                        },
                                      ],
                                      onChange: function(e) {
                                        console.log(e);
                                      },
                                    },
                                    {
                                      type: 'slot',
                                      key: 'slot',
                                      slotComponent: function() {
                                        return o['default'].createElement(
                                          o['default'].Fragment,
                                          null,
                                          o['default'].createElement(
                                            s.Button,
                                            {
                                              className: 'submit-btn',
                                              type: 'primary',
                                              onClick: t,
                                              htmlType: 'submit',
                                            },
                                            'Search',
                                          ),
                                          o['default'].createElement(
                                            s.Button,
                                            {
                                              className: 'reset-btn',
                                              onClick: a,
                                              htmlType: 'button',
                                              style: { marginLeft: '8px' },
                                            },
                                            'Reset',
                                          ),
                                        );
                                      },
                                    },
                                  ],
                                },
                                t = function() {
                                  var n = e.current.getFieldsValue();
                                  console.log('\u70b9\u51fb\u6309\u94ae', n);
                                },
                                a = function() {
                                  e.current.resetFields();
                                };
                              return o['default'].createElement(
                                i.Form,
                                (0, l['default'])(
                                  {
                                    onRef: function(n) {
                                      return (e.current = n);
                                    },
                                  },
                                  n,
                                ),
                              );
                            }),
                            e.abrupt('return', u)
                          );
                        case 20:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useRef } from 'react';\nimport { Button } from 'antd';\nimport { Form } from 'fudata-ui';\n\nexport default () => {\n  const formRef = useRef();\n  const rFormProps = {\n    formProps: {\n      layout: 'inline',\n    },\n    dataList: [\n      {\n        type: 'Input',\n        name: 'username',\n      },\n      {\n        type: 'DatePicker',\n        dateType: 'RangePicker',\n        name: 'timeRange',\n        defaultPicker: {\n          showTime: { format: 'HH:mm' },\n          format: 'YYYY-MM-DD HH:mm',\n          onChange(value) {\n            console.log(value);\n          },\n        },\n      },\n      {\n        type: 'Select',\n        name: 'gender',\n        allowClear: true,\n        optionLists: [\n          {\n            sendValue: 'male',\n            showValue: 'male',\n          },\n          {\n            sendValue: 'female',\n            showValue: 'female',\n          },\n          {\n            sendValue: 'other',\n            showValue: 'other',\n          },\n        ],\n        onChange: value => {\n          console.log(value);\n        },\n      },\n      {\n        type: 'slot',\n        key: 'slot',\n        slotComponent: () => {\n          return (\n            <>\n              <Button\n                className=\"submit-btn\"\n                type=\"primary\"\n                onClick={onSubmit}\n                htmlType=\"submit\"\n              >\n                Search\n              </Button>\n              <Button\n                className=\"reset-btn\"\n                onClick={onReset}\n                htmlType=\"button\"\n                style={{ marginLeft: '8px' }}\n              >\n                Reset\n              </Button>\n            </>\n          );\n        },\n      },\n    ],\n  };\n  // \u67e5\u8be2\n  const onSubmit = () => {\n    const value = formRef.current.getFieldsValue();\n    console.log('\u70b9\u51fb\u6309\u94ae', value);\n  };\n  // \u91cd\u7f6e\n  const onReset = () => {\n    formRef.current.resetFields();\n  };\n\n  return <Form onRef={ref => (formRef.current = ref)} {...rFormProps}></Form>;\n};",
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              antd: { version: '4.16.13', css: 'antd/dist/antd.css' },
              'fudata-ui': { version: '1.0.2-2' },
              'react-dom': { version: '>=16.9.0' },
            },
            componentName: 'Form',
            identifier: 'Form-demo-1',
          },
        },
        'FormTable-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o, s, i, u;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('284h')),
                            (a = t('TqRt')),
                            (e.t0 = a),
                            (e.next = 5),
                            t.e(9).then(t.bind(null, 'ODXe'))
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (l = (0, e.t0)(e.t1)),
                            (e.t2 = n),
                            (e.next = 10),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 10:
                          return (
                            (e.t3 = e.sent),
                            (o = (0, e.t2)(e.t3)),
                            (e.next = 14),
                            Promise.all([
                              t.e(0),
                              t.e(2),
                              t.e(1),
                              t.e(7),
                              t.e(8),
                            ]).then(t.bind(null, 'gdfu'))
                          );
                        case 14:
                          return (
                            (s = e.sent),
                            (e.next = 17),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 17:
                          return (
                            (i = e.sent),
                            (e.next = 20),
                            t.e(22).then(t.t.bind(null, 'mzNo', 7))
                          );
                        case 20:
                          return (
                            (u = function() {
                              var e = (0, o.useRef)(),
                                n = (0, o.useState)([]),
                                t = (0, l['default'])(n, 2),
                                a = t[0],
                                r = t[1],
                                u = [
                                  { title: '\u59d3\u540d', dataIndex: 'name' },
                                  {
                                    title: '\u6027\u522b',
                                    dataIndex: 'sex',
                                    type: 'radio',
                                    disabled: !0,
                                  },
                                  {
                                    title: o['default'].createElement(
                                      'span',
                                      null,
                                      '111\u5730\u533a',
                                    ),
                                    dataIndex: 'city',
                                    type: 'checkbox',
                                    disabled: !0,
                                  },
                                  {
                                    title: o['default'].createElement(
                                      'span',
                                      { className: 'require-icon' },
                                      '\u53c2\u6570',
                                    ),
                                    dataIndex: 'cs',
                                    type: 'input',
                                    rules: [{ required: !0 }],
                                  },
                                  {
                                    title: '\u5730\u533a',
                                    dataIndex: 'city1',
                                    type: 'select',
                                    lists: [
                                      { value: 'hz', label: '\u676d\u5dde' },
                                      { value: 'nb', label: '\u5b81\u6ce2' },
                                      { value: 'sx', label: '\u7ecd\u5174' },
                                    ],
                                  },
                                ],
                                c = function() {
                                  var n = JSON.parse(JSON.stringify(a));
                                  (n[0].cs = 'asdafasd'),
                                    e.current.setFieldsValue({ formRow: n });
                                },
                                d = function() {
                                  e.current
                                    .validateFields()
                                    .then(function(e) {
                                      console.log(e);
                                    })
                                    ['catch'](function(e) {
                                      console.log(e);
                                    });
                                };
                              return (
                                (0, o.useEffect)(function() {
                                  var n = [
                                    {
                                      name: 'asd',
                                      sex: !0,
                                      city: !0,
                                      cs: '',
                                      city1: '',
                                    },
                                    {
                                      name: '444',
                                      sex: !0,
                                      city: !1,
                                      cs: 32323,
                                      city1: 'sx',
                                    },
                                    {
                                      name: '333',
                                      sex: !1,
                                      city: !0,
                                      cs: 555,
                                      city1: 'nb',
                                    },
                                    {
                                      name: '222',
                                      sex: !1,
                                      city: !1,
                                      cs: 444,
                                      city1: 'hz',
                                    },
                                    {
                                      name: '111',
                                      sex: !0,
                                      city: !0,
                                      cs: 33,
                                      city1: 'nb',
                                    },
                                  ];
                                  r(n),
                                    e.current.setFieldsValue({ formRow: n });
                                }, []),
                                o['default'].createElement(
                                  o['default'].Fragment,
                                  null,
                                  o['default'].createElement(i.FormTable, {
                                    onRef: function(n) {
                                      return (e.current = n);
                                    },
                                    columns: u,
                                    dataSource: a,
                                  }),
                                  o['default'].createElement(
                                    'div',
                                    { style: { marginTop: '15px' } },
                                    o['default'].createElement(
                                      s.Button,
                                      {
                                        onClick: d,
                                        style: { marginRight: '16px' },
                                      },
                                      'submit',
                                    ),
                                    o['default'].createElement(
                                      s.Button,
                                      { onClick: c },
                                      'fill-value',
                                    ),
                                  ),
                                )
                              );
                            }),
                            e.abrupt('return', u)
                          );
                        case 22:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState, useEffect, useRef } from 'react';\nimport { Button, Form } from 'antd';\nimport { FormTable } from 'fudata-ui';\nimport './index.less';\n\nexport default () => {\n  const formRef = useRef();\n  const [dataList, setDataList] = useState([]);\n\n  const columns = [\n    {\n      title: '\u59d3\u540d',\n      dataIndex: 'name',\n    },\n    {\n      title: '\u6027\u522b',\n      dataIndex: 'sex',\n      type: 'radio',\n      disabled: true,\n    },\n    {\n      title: <span>111\u5730\u533a</span>,\n      dataIndex: 'city',\n      type: 'checkbox',\n      disabled: true,\n    },\n    {\n      title: <span className=\"require-icon\">\u53c2\u6570</span>,\n      dataIndex: 'cs',\n      type: 'input',\n      rules: [\n        {\n          required: true,\n        },\n      ],\n    },\n    {\n      title: '\u5730\u533a',\n      dataIndex: 'city1',\n      type: 'select',\n      lists: [\n        {\n          value: 'hz',\n          label: '\u676d\u5dde',\n        },\n        {\n          value: 'nb',\n          label: '\u5b81\u6ce2',\n        },\n        {\n          value: 'sx',\n          label: '\u7ecd\u5174',\n        },\n      ],\n    },\n  ];\n\n  // \u586b\u5145\u9ed8\u8ba4\u503c\n  const fillTableValue = () => {\n    const mockList = JSON.parse(JSON.stringify(dataList));\n    mockList[0].cs = 'asdafasd';\n    formRef.current.setFieldsValue({\n      formRow: mockList,\n    });\n  };\n\n  // \u63d0\u4ea4\n  const submitForm = () => {\n    formRef.current\n      .validateFields()\n      .then(res => {\n        console.log(res);\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n\n  useEffect(() => {\n    const list = [\n      {\n        name: 'asd',\n        sex: true,\n        city: true,\n        cs: '',\n        city1: '',\n      },\n      {\n        name: '444',\n        sex: true,\n        city: false,\n        cs: 32323,\n        city1: 'sx',\n      },\n      {\n        name: '333',\n        sex: false,\n        city: true,\n        cs: 555,\n        city1: 'nb',\n      },\n      {\n        name: '222',\n        sex: false,\n        city: false,\n        cs: 444,\n        city1: 'hz',\n      },\n      {\n        name: '111',\n        sex: true,\n        city: true,\n        cs: 33,\n        city1: 'nb',\n      },\n    ];\n    setDataList(list);\n    formRef.current.setFieldsValue({\n      formRow: list,\n    });\n  }, []);\n\n  return (\n    <>\n      <FormTable\n        onRef={ref => (formRef.current = ref)}\n        columns={columns}\n        dataSource={dataList}\n      />\n      <div style={{ marginTop: '15px' }}>\n        <Button onClick={submitForm} style={{ marginRight: '16px' }}>\n          submit\n        </Button>\n        <Button onClick={fillTableValue}>fill-value</Button>\n      </div>\n    </>\n  );\n};",
              },
              'index.less': { import: './index.less', content: s },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              antd: { version: '4.16.13', css: 'antd/dist/antd.css' },
              'fudata-ui': { version: '1.0.2-2' },
              'react-dom': { version: '>=16.9.0' },
            },
            componentName: 'FormTable',
            identifier: 'FormTable-demo',
          },
        },
        'FormTable-demo-1': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o, s, i, u;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('284h')),
                            (a = t('TqRt')),
                            (e.t0 = a),
                            (e.next = 5),
                            t.e(9).then(t.bind(null, 'ODXe'))
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (l = (0, e.t0)(e.t1)),
                            (e.t2 = n),
                            (e.next = 10),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 10:
                          return (
                            (e.t3 = e.sent),
                            (o = (0, e.t2)(e.t3)),
                            (e.next = 14),
                            Promise.all([
                              t.e(0),
                              t.e(2),
                              t.e(1),
                              t.e(7),
                              t.e(8),
                            ]).then(t.bind(null, 'gdfu'))
                          );
                        case 14:
                          return (
                            (s = e.sent),
                            (e.next = 17),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 17:
                          return (
                            (i = e.sent),
                            (u = function() {
                              var e = s.Form.useForm(),
                                n = (0, l['default'])(e, 1),
                                t = n[0],
                                a = (0, o.useState)([]),
                                r = (0, l['default'])(a, 2),
                                u = r[0],
                                c = r[1],
                                d = [
                                  { title: '\u59d3\u540d', dataIndex: 'name' },
                                  {
                                    title: '\u6027\u522b',
                                    dataIndex: 'sex',
                                    type: 'radio',
                                    disabled: !0,
                                  },
                                  {
                                    title: o['default'].createElement(
                                      'span',
                                      null,
                                      '111\u5730\u533a',
                                    ),
                                    dataIndex: 'city',
                                    type: 'checkbox',
                                    disabled: !0,
                                  },
                                  {
                                    title: o['default'].createElement(
                                      'span',
                                      { className: 'require-icon' },
                                      '\u53c2\u6570',
                                    ),
                                    dataIndex: 'cs',
                                    type: 'input',
                                    rules: [{ required: !0 }],
                                  },
                                  {
                                    title: '\u5730\u533a',
                                    dataIndex: 'city1',
                                    type: 'select',
                                    lists: [
                                      { value: 'hz', label: '\u676d\u5dde' },
                                      { value: 'nb', label: '\u5b81\u6ce2' },
                                      { value: 'sx', label: '\u7ecd\u5174' },
                                    ],
                                  },
                                ],
                                m = function() {
                                  var e = JSON.parse(JSON.stringify(u));
                                  (e[0].cs = 'asdafasd'),
                                    t.setFieldsValue({
                                      note: 'Hello world!',
                                      formRowKey: e,
                                    });
                                },
                                f = function() {
                                  t.validateFields()
                                    .then(function(e) {
                                      console.log(e);
                                    })
                                    ['catch'](function(e) {
                                      console.log(e);
                                    });
                                };
                              return (
                                (0, o.useEffect)(function() {
                                  var e = [
                                    {
                                      name: 'asd',
                                      sex: !0,
                                      city: !0,
                                      cs: '',
                                      city1: '',
                                    },
                                  ];
                                  c(e), t.setFieldsValue({ formRowKey: e });
                                }, []),
                                o['default'].createElement(
                                  o['default'].Fragment,
                                  null,
                                  o['default'].createElement(
                                    s.Form,
                                    { form: t },
                                    o['default'].createElement(
                                      s.Form.Item,
                                      {
                                        name: 'note',
                                        label: 'Note',
                                        rules: [{ required: !0 }],
                                      },
                                      o['default'].createElement(s.Input, null),
                                    ),
                                    o['default'].createElement(i.FormTable, {
                                      formRowKey: 'formRowKey',
                                      columns: d,
                                      dataSource: u,
                                    }),
                                  ),
                                  o['default'].createElement(
                                    'div',
                                    { style: { marginTop: '15px' } },
                                    o['default'].createElement(
                                      s.Button,
                                      {
                                        onClick: f,
                                        style: { marginRight: '16px' },
                                      },
                                      'submit',
                                    ),
                                    o['default'].createElement(
                                      s.Button,
                                      { onClick: m },
                                      'fill-value',
                                    ),
                                  ),
                                )
                              );
                            }),
                            e.abrupt('return', u)
                          );
                        case 20:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState, useEffect, useRef } from 'react';\nimport { Button, Form, Input } from 'antd';\nimport { FormTable } from 'fudata-ui';\nexport default () => {\n  const [formRef] = Form.useForm();\n  const [dataList, setDataList] = useState([]);\n\n  const columns = [\n    {\n      title: '\u59d3\u540d',\n      dataIndex: 'name',\n    },\n    {\n      title: '\u6027\u522b',\n      dataIndex: 'sex',\n      type: 'radio',\n      disabled: true,\n    },\n    {\n      title: <span>111\u5730\u533a</span>,\n      dataIndex: 'city',\n      type: 'checkbox',\n      disabled: true,\n    },\n    {\n      title: <span className=\"require-icon\">\u53c2\u6570</span>,\n      dataIndex: 'cs',\n      type: 'input',\n      rules: [\n        {\n          required: true,\n        },\n      ],\n    },\n    {\n      title: '\u5730\u533a',\n      dataIndex: 'city1',\n      type: 'select',\n      lists: [\n        {\n          value: 'hz',\n          label: '\u676d\u5dde',\n        },\n        {\n          value: 'nb',\n          label: '\u5b81\u6ce2',\n        },\n        {\n          value: 'sx',\n          label: '\u7ecd\u5174',\n        },\n      ],\n    },\n  ];\n\n  // \u586b\u5145\u9ed8\u8ba4\u503c\n  const fillTableValue = () => {\n    const mockList = JSON.parse(JSON.stringify(dataList));\n    mockList[0].cs = 'asdafasd';\n    formRef.setFieldsValue({\n      note: 'Hello world!',\n      formRowKey: mockList,\n    });\n  };\n\n  // \u63d0\u4ea4\n  const submitForm = () => {\n    formRef\n      .validateFields()\n      .then(res => {\n        console.log(res);\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n\n  useEffect(() => {\n    const list = [\n      {\n        name: 'asd',\n        sex: true,\n        city: true,\n        cs: '',\n        city1: '',\n      },\n    ];\n    setDataList(list);\n    formRef.setFieldsValue({\n      formRowKey: list,\n    });\n  }, []);\n\n  return (\n    <>\n      <Form form={formRef}>\n        <Form.Item name=\"note\" label=\"Note\" rules={[{ required: true }]}>\n          <Input />\n        </Form.Item>\n        <FormTable\n          formRowKey=\"formRowKey\"\n          columns={columns}\n          dataSource={dataList}\n        />\n      </Form>\n      <div style={{ marginTop: '15px' }}>\n        <Button onClick={submitForm} style={{ marginRight: '16px' }}>\n          submit\n        </Button>\n        <Button onClick={fillTableValue}>fill-value</Button>\n      </div>\n    </>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              antd: { version: '4.16.13', css: 'antd/dist/antd.css' },
              'fudata-ui': { version: '1.0.2-2' },
              'react-dom': { version: '>=16.9.0' },
            },
            componentName: 'FormTable',
            identifier: 'FormTable-demo-1',
          },
        },
        'FormTable-demo-2': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o, s, i, u, c;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('284h')),
                            (a = t('TqRt')),
                            (e.t0 = a),
                            (e.next = 5),
                            Promise.resolve().then(t.bind(null, 'wx14'))
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (l = (0, e.t0)(e.t1)),
                            (e.t2 = a),
                            (e.next = 10),
                            t.e(9).then(t.bind(null, 'ODXe'))
                          );
                        case 10:
                          return (
                            (e.t3 = e.sent),
                            (o = (0, e.t2)(e.t3)),
                            (e.t4 = n),
                            (e.next = 15),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 15:
                          return (
                            (e.t5 = e.sent),
                            (s = (0, e.t4)(e.t5)),
                            (e.next = 19),
                            Promise.all([
                              t.e(0),
                              t.e(2),
                              t.e(1),
                              t.e(7),
                              t.e(8),
                            ]).then(t.bind(null, 'gdfu'))
                          );
                        case 19:
                          return (
                            (i = e.sent),
                            (e.next = 22),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 22:
                          return (
                            (u = e.sent),
                            (c = function() {
                              var e = (0, s.useRef)(),
                                n = (0, s.useState)([]),
                                t = (0, o['default'])(n, 2),
                                a = t[0],
                                r = t[1],
                                c = [
                                  { title: '\u59d3\u540d', dataIndex: 'name' },
                                  {
                                    title: '\u6027\u522b',
                                    dataIndex: 'sex',
                                    type: 'radio',
                                    disabled: !0,
                                  },
                                  {
                                    title: s['default'].createElement(
                                      'span',
                                      null,
                                      '111\u5730\u533a',
                                    ),
                                    dataIndex: 'city',
                                    type: 'checkbox',
                                    disabled: !0,
                                  },
                                  {
                                    title: s['default'].createElement(
                                      'span',
                                      { className: 'require-icon' },
                                      '\u53c2\u6570',
                                    ),
                                    dataIndex: 'cs',
                                    type: 'input',
                                    rules: [{ required: !0 }],
                                  },
                                  {
                                    title: '\u5730\u533a',
                                    dataIndex: 'city1',
                                    type: 'select',
                                    lists: [
                                      { value: 'hz', label: '\u676d\u5dde' },
                                      { value: 'nb', label: '\u5b81\u6ce2' },
                                      { value: 'sx', label: '\u7ecd\u5174' },
                                    ],
                                  },
                                ],
                                d = function() {
                                  e.current
                                    .validateFields()
                                    .then(function(e) {
                                      console.log(e);
                                    })
                                    ['catch'](function(e) {
                                      console.log(e);
                                    });
                                },
                                m = function() {
                                  e.current.resetFields();
                                },
                                f = function() {
                                  var n = window.moment('2019-05-05 12:01'),
                                    t = window.moment('2020-05-05 12:01');
                                  e.current.setFieldsValue({
                                    username: 'admin',
                                    sex: 'boy',
                                    timeRange: [n, t],
                                    formRowKey: [
                                      {
                                        name: 'asd',
                                        sex: !0,
                                        city: !0,
                                        cs: 'asdasd',
                                        city1: 'hz',
                                      },
                                    ],
                                  });
                                },
                                p = {
                                  formProps: {
                                    labelCol: { span: 6 },
                                    wrapperCol: { span: 18 },
                                  },
                                  dataList: [
                                    {
                                      type: 'Input',
                                      label: 'Username',
                                      name: 'username',
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            'Please input your username!',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'DatePicker',
                                      dateType: 'RangePicker',
                                      label: '\u65f6\u95f4\u533a\u95f4',
                                      name: 'timeRange',
                                      defaultPicker: {
                                        showTime: { format: 'HH:mm' },
                                        format: 'YYYY-MM-DD HH:mm',
                                        onChange: function(e) {
                                          console.log(e);
                                        },
                                      },
                                    },
                                    {
                                      type: 'radio',
                                      label: 'Sex',
                                      name: 'sex',
                                      option: [
                                        { sendValue: 'boy', showValue: 'boy' },
                                        {
                                          sendValue: 'gril',
                                          showValue: 'gril',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'slot',
                                      key: 'slot',
                                      selfLayout: {
                                        wrapperCol: { offset: 0, span: 24 },
                                      },
                                      slotComponent: function() {
                                        return s[
                                          'default'
                                        ].createElement(u.FormTable, {
                                          formRowKey: 'formRowKey',
                                          columns: c,
                                          dataSource: a,
                                        });
                                      },
                                    },
                                  ],
                                };
                              return (
                                (0, s.useEffect)(function() {
                                  var n = [
                                    {
                                      name: 'asd',
                                      sex: !0,
                                      city: !0,
                                      cs: '',
                                      city1: '',
                                    },
                                  ];
                                  r(n),
                                    e.current.setFieldsValue({
                                      username: 'cdb',
                                      sex: 'boy',
                                    });
                                }, []),
                                s['default'].createElement(
                                  'div',
                                  null,
                                  s['default'].createElement(
                                    u.Form,
                                    (0, l['default'])(
                                      {
                                        onRef: function(n) {
                                          return (e.current = n);
                                        },
                                      },
                                      p,
                                    ),
                                  ),
                                  s['default'].createElement(
                                    'div',
                                    null,
                                    s['default'].createElement(
                                      i.Button,
                                      {
                                        className: 'submit-btn',
                                        type: 'primary',
                                        onClick: d,
                                        htmlType: 'submit',
                                      },
                                      'Submit',
                                    ),
                                    s['default'].createElement(
                                      i.Button,
                                      {
                                        className: 'reset-btn',
                                        onClick: m,
                                        htmlType: 'button',
                                        style: { marginLeft: '8px' },
                                      },
                                      'Reset',
                                    ),
                                    s['default'].createElement(
                                      i.Button,
                                      {
                                        className: 'set-default-btn',
                                        type: 'link',
                                        htmlType: 'button',
                                        style: { marginLeft: '8px' },
                                        onClick: f,
                                      },
                                      'Fill form',
                                    ),
                                  ),
                                )
                              );
                            }),
                            e.abrupt('return', c)
                          );
                        case 25:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React, { useState, useEffect, useRef } from 'react';\nimport { Button } from 'antd';\nimport { FormTable, Form } from 'fudata-ui';\n\nexport default () => {\n  const formRef = useRef();\n\n  const [dataList, setDataList] = useState([]);\n\n  const columns = [\n    {\n      title: '\u59d3\u540d',\n      dataIndex: 'name',\n    },\n    {\n      title: '\u6027\u522b',\n      dataIndex: 'sex',\n      type: 'radio',\n      disabled: true,\n    },\n    {\n      title: <span>111\u5730\u533a</span>,\n      dataIndex: 'city',\n      type: 'checkbox',\n      disabled: true,\n    },\n    {\n      title: <span className=\"require-icon\">\u53c2\u6570</span>,\n      dataIndex: 'cs',\n      type: 'input',\n      rules: [\n        {\n          required: true,\n        },\n      ],\n    },\n    {\n      title: '\u5730\u533a',\n      dataIndex: 'city1',\n      type: 'select',\n      lists: [\n        {\n          value: 'hz',\n          label: '\u676d\u5dde',\n        },\n        {\n          value: 'nb',\n          label: '\u5b81\u6ce2',\n        },\n        {\n          value: 'sx',\n          label: '\u7ecd\u5174',\n        },\n      ],\n    },\n  ];\n\n  const onSubmit = () => {\n    formRef.current.validateFields().then(res => {\n      console.log(res);\n    }).catch(err => {\n      console.log(err)\n    })\n  };\n\n  const onReset = () => {\n    formRef.current.resetFields();\n  };\n\n  const onFill = () => {\n    const date1 = window.moment('2019-05-05 12:01')\n    const date2 = window.moment('2020-05-05 12:01')\n    formRef.current.setFieldsValue({\n      username: 'admin',\n      sex: 'boy',\n      timeRange: [date1, date2],\n      formRowKey: [\n        {\n          name: 'asd',\n          sex: true,\n          city: true,\n          cs: 'asdasd',\n          city1: 'hz',\n        }\n      ]\n    });\n  };\n\n  const rFormProps = {\n    formProps: {\n      labelCol: { span: 6 },\n      wrapperCol: { span: 18 },\n    },\n    dataList: [\n      {\n        type: 'Input',\n        label: 'Username',\n        name: 'username',\n        rules: [{ required: true, message: 'Please input your username!' }],\n      },\n      {\n        type: 'DatePicker',\n        dateType: 'RangePicker',\n        label: '\u65f6\u95f4\u533a\u95f4',\n        name: 'timeRange',\n        defaultPicker: {\n          showTime: { format: 'HH:mm' },\n          format: 'YYYY-MM-DD HH:mm',\n          onChange(value) {\n            console.log(value);\n          },\n        },\n      },\n      {\n        type: 'radio',\n        label: 'Sex',\n        name: 'sex',\n        option: [\n          {\n            sendValue: 'boy',\n            showValue: 'boy',\n          },\n          {\n            sendValue: 'gril',\n            showValue: 'gril',\n          },\n        ],\n      },\n      {\n        type: 'slot',\n        key: 'slot',\n        selfLayout: {\n          wrapperCol: {\n            offset: 0,\n            span: 24,\n          },\n        },\n        slotComponent: () => {\n          return (\n            <FormTable\n              formRowKey=\"formRowKey\"\n              columns={columns}\n              dataSource={dataList}\n            />\n          );\n        },\n      },\n    ],\n  };\n\n  useEffect(() => {\n    const list = [\n      {\n        name: 'asd',\n        sex: true,\n        city: true,\n        cs: '',\n        city1: '',\n      },\n    ];\n    setDataList(list);\n    formRef.current.setFieldsValue({\n      username: 'cdb',\n      sex: 'boy'\n    });\n  }, [])\n\n  return (\n    <div>\n      <Form onRef={ref => (formRef.current = ref)} {...rFormProps}></Form>\n      <div>\n        <Button\n          className=\"submit-btn\"\n          type=\"primary\"\n          onClick={onSubmit}\n          htmlType=\"submit\"\n        >\n          Submit\n        </Button>\n        <Button\n          className=\"reset-btn\"\n          onClick={onReset}\n          htmlType=\"button\"\n          style={{ marginLeft: '8px' }}\n        >\n          Reset\n        </Button>\n        <Button\n          className=\"set-default-btn\"\n          type=\"link\"\n          htmlType=\"button\"\n          style={{ marginLeft: '8px' }}\n          onClick={onFill}\n        >\n          Fill form\n        </Button>\n      </div>\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              antd: { version: '4.16.13', css: 'antd/dist/antd.css' },
              'fudata-ui': { version: '1.0.2-2' },
              'react-dom': { version: '>=16.9.0' },
            },
            componentName: 'FormTable',
            identifier: 'FormTable-demo-2',
          },
        },
        'SelectTable-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              var e = {
                                initColums: [
                                  {
                                    title: '\u63a5\u53e3',
                                    dataIndex: 'jk',
                                    key: 'jk',
                                  },
                                  {
                                    title: '\u673a\u6784\u8282\u70b9',
                                    dataIndex: 'jg',
                                    key: 'jg',
                                  },
                                  {
                                    title: '\u51fa\u53c2\u6570\u91cf',
                                    dataIndex: 'cc',
                                    key: 'cc',
                                    sorter: {
                                      compare: function(e, n) {
                                        return e.cc - n.cc;
                                      },
                                      multiple: 3,
                                    },
                                    filters: [
                                      { text: '00', value: '00' },
                                      { text: 333, value: 333 },
                                    ],
                                    onFilter: function(e, n) {
                                      return n.cc === e;
                                    },
                                    ellipsis: !0,
                                  },
                                  {
                                    title: '\u63a5\u53e3\u72b6\u6001',
                                    dataIndex: 'status',
                                    key: 'status',
                                  },
                                  {
                                    title:
                                      '\u6700\u65b0\u68c0\u6d4b\u65f6\u95f4',
                                    dataIndex: 'lastTime',
                                    key: 'lastTime',
                                  },
                                  {
                                    title:
                                      '\u5386\u53f2\u53ef\u7528\u8be6\u60c5',
                                    dataIndex: 'hisDetail',
                                    key: 'hisDetail',
                                  },
                                  {
                                    title: '30\u5929\u5185\u53ef\u7528\u7387',
                                    dataIndex: 'three',
                                    key: 'three',
                                  },
                                ],
                                data: [
                                  {
                                    id: 0,
                                    jk: '000',
                                    jg: '000',
                                    cc: '00',
                                    status: '0000',
                                    lastTime: '0000',
                                    hisDetail: '00000',
                                    three: '0000',
                                  },
                                  {
                                    id: 1,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 2,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 3,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 4,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 5,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 6,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 7,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 8,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 9,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 10,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 11,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 12,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                ],
                                rowKey: 'id',
                                onChange: function(e) {
                                  console.log(e);
                                },
                              };
                              return a['default'].createElement(
                                'div',
                                null,
                                a['default'].createElement(l.SelectTable, e),
                              );
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React from 'react';\nimport { SelectTable } from 'fudata-ui';\n\nexport default () => {\n  const uploadProps = {\n    initColums: [\n      {\n        title: '\u63a5\u53e3',\n        dataIndex: 'jk',\n        key: 'jk',\n      },\n      {\n        title: '\u673a\u6784\u8282\u70b9',\n        dataIndex: 'jg',\n        key: 'jg',\n      },\n      {\n        title: '\u51fa\u53c2\u6570\u91cf',\n        dataIndex: 'cc',\n        key: 'cc',\n        sorter: {\n          compare: (a, b) => a.cc - b.cc,\n          multiple: 3,\n        },\n        filters: [\n          { text: '00', value: '00' },\n          { text: 333, value: 333 },\n        ],\n        // filteredValue: filteredInfo.cc || null,\n        onFilter: (value, record) => record.cc === value,\n        ellipsis: true,\n      },\n      {\n        title: '\u63a5\u53e3\u72b6\u6001',\n        dataIndex: 'status',\n        key: 'status',\n      },\n      {\n        title: '\u6700\u65b0\u68c0\u6d4b\u65f6\u95f4',\n        dataIndex: 'lastTime',\n        key: 'lastTime',\n      },\n      {\n        title: '\u5386\u53f2\u53ef\u7528\u8be6\u60c5',\n        dataIndex: 'hisDetail',\n        key: 'hisDetail',\n      },\n      {\n        title: '30\u5929\u5185\u53ef\u7528\u7387',\n        dataIndex: 'three',\n        key: 'three',\n      },\n    ],\n    data: [\n      {\n        id: 0,\n        jk: '000',\n        jg: '000',\n        cc: '00',\n        status: '0000',\n        lastTime: '0000',\n        hisDetail: '00000',\n        three: '0000',\n      },\n      {\n        id: 1,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 2,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 3,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 4,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 5,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 6,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 7,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 8,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 9,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 10,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 11,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 12,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n    ],\n    rowKey: 'id',\n    // \u56de\u4f20\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868\n    onChange(val) {\n      console.log(val);\n    },\n  };\n  return (\n    <div>\n      <SelectTable {...uploadProps} />\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'SelectTable',
            identifier: 'SelectTable-demo',
          },
        },
        'SelectTable-demo-1': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              var e = {
                                initColums: [
                                  {
                                    title: '\u63a5\u53e3',
                                    dataIndex: 'jk',
                                    key: 'jk',
                                  },
                                  {
                                    title: '\u673a\u6784\u8282\u70b9',
                                    dataIndex: 'jg',
                                    key: 'jg',
                                  },
                                  {
                                    title: '\u51fa\u53c2\u6570\u91cf',
                                    dataIndex: 'cc',
                                    key: 'cc',
                                  },
                                  {
                                    title: '\u63a5\u53e3\u72b6\u6001',
                                    dataIndex: 'status',
                                    key: 'status',
                                  },
                                  {
                                    title:
                                      '\u6700\u65b0\u68c0\u6d4b\u65f6\u95f4',
                                    dataIndex: 'lastTime',
                                    key: 'lastTime',
                                  },
                                  {
                                    title:
                                      '\u5386\u53f2\u53ef\u7528\u8be6\u60c5',
                                    dataIndex: 'hisDetail',
                                    key: 'hisDetail',
                                  },
                                  {
                                    title: '30\u5929\u5185\u53ef\u7528\u7387',
                                    dataIndex: 'three',
                                    key: 'three',
                                  },
                                ],
                                data: [
                                  {
                                    id: 0,
                                    jk: '000',
                                    jg: '000',
                                    cc: '00',
                                    status: '0000',
                                    lastTime: '0000',
                                    hisDetail: '00000',
                                    three: '0000',
                                  },
                                  {
                                    id: 1,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 2,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                  {
                                    id: 3,
                                    jk: 111,
                                    jg: 222,
                                    cc: 333,
                                    status: 444,
                                    lastTime: 555,
                                    hisDetail: 666,
                                    three: 999,
                                  },
                                ],
                                rowKey: 'id',
                                onChange: function(e) {
                                  console.log(e);
                                },
                                initData: [2, 3],
                                rowSelect: {
                                  getCheckboxProps: function(e) {
                                    return console.log(e), { disabled: !0 };
                                  },
                                },
                              };
                              return a['default'].createElement(
                                'div',
                                null,
                                a['default'].createElement(l.SelectTable, e),
                              );
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React from 'react';\nimport { SelectTable } from 'fudata-ui';\n\nexport default () => {\n  const uploadProps = {\n    initColums: [\n      {\n        title: '\u63a5\u53e3',\n        dataIndex: 'jk',\n        key: 'jk',\n      },\n      {\n        title: '\u673a\u6784\u8282\u70b9',\n        dataIndex: 'jg',\n        key: 'jg',\n      },\n      {\n        title: '\u51fa\u53c2\u6570\u91cf',\n        dataIndex: 'cc',\n        key: 'cc',\n      },\n      {\n        title: '\u63a5\u53e3\u72b6\u6001',\n        dataIndex: 'status',\n        key: 'status',\n      },\n      {\n        title: '\u6700\u65b0\u68c0\u6d4b\u65f6\u95f4',\n        dataIndex: 'lastTime',\n        key: 'lastTime',\n      },\n      {\n        title: '\u5386\u53f2\u53ef\u7528\u8be6\u60c5',\n        dataIndex: 'hisDetail',\n        key: 'hisDetail',\n      },\n      {\n        title: '30\u5929\u5185\u53ef\u7528\u7387',\n        dataIndex: 'three',\n        key: 'three',\n      },\n    ],\n    data: [\n      {\n        id: 0,\n        jk: '000',\n        jg: '000',\n        cc: '00',\n        status: '0000',\n        lastTime: '0000',\n        hisDetail: '00000',\n        three: '0000',\n      },\n      {\n        id: 1,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 2,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n      {\n        id: 3,\n        jk: 111,\n        jg: 222,\n        cc: 333,\n        status: 444,\n        lastTime: 555,\n        hisDetail: 666,\n        three: 999,\n      },\n    ],\n    rowKey: 'id',\n    // \u56de\u4f20\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868\n    onChange(val) {\n      console.log(val);\n    },\n    initData: [2, 3],\n    rowSelect: {\n      getCheckboxProps: record => {\n        console.log(record);\n        return {\n          disabled: true,\n        };\n      },\n    },\n  };\n  return (\n    <div>\n      <SelectTable {...uploadProps} />\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'SelectTable',
            identifier: 'SelectTable-demo-1',
          },
        },
        'Upload-demo': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              var e = {
                                value:
                                  'https://filebuck.oss-cn-hangzhou.aliyuncs.com/fsUpload/03cc1b5f20af25b9_154x154.png',
                                limitType: [
                                  'image/jpeg',
                                  'image/jpg',
                                  'image/png',
                                ],
                                unit: 'MB',
                                errText:
                                  '\u4ec5\u652f\u6301jpg png\u683c\u5f0f\u56fe\u7247!',
                                showListBool: !0,
                                onChange: function(e) {
                                  console.log(e);
                                },
                              };
                              return a['default'].createElement(
                                'div',
                                null,
                                a['default'].createElement(l.Upload, e),
                              );
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React from 'react';\nimport { Upload } from 'fudata-ui';\n\n// const OSS = (window as any).OSS\n// let client = new OSS({\n//   //\u963f\u91cc\u4e91\u8d26\u53f7AccessKey\u62e5\u6709\u6240\u6709API\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u5efa\u8bae\u9075\u5faa\u963f\u91cc\u4e91\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\uff0c\u521b\u5efa\u5e76\u4f7f\u7528STS\u65b9\u5f0f\u8bbf\u95eeAPI\u3002\n//   accessKeyId: 'LTAI5tSp5sN8ekufP7uaYasf',\n//   accessKeySecret: 'dZ8WC5bVq9uaMu3FIlGMCptREdpr4B',\n//   bucket: 'filebuck'\n// });\n\n// \u9ed8\u8ba4\u7684oss\u4e0a\u4f20\u5730\u5740\n// const customRequest = ({file, onSuccess}: any) => {\n//   const fileName = file.name || '\u9ed8\u8ba4\u540d\u79f0'\n//   console.log(fileName)\n//   onSuccess('')\n//   // oss\u7684\u6587\u4ef6\u76ee\u5f55\n//   // const uploadName = `fsUpload/${fileName}`\n//   // client.put(uploadName, file).then(function (r1: any) {\n//   //   console.log('put success: %j', r1);\n//   //   message.success('\u4e0a\u4f20\u6210\u529f')\n//   //   onChange(r1)\n//   //   return client.get(uploadName);\n//   // }).then(function (r2: any) {\n//   //   console.log('get success: %j', r2);\n//   //   const requestUrls = r2.res.requestUrls\n//   //   const requestUrl = Array.isArray(requestUrls) ? requestUrls[0] : requestUrls\n//   //   setImageUrl(requestUrl)\n//   // }).catch(function (err: any) {\n//   //   console.error('error: %j', err);\n//   //   message.error('\u4e0a\u4f20\u5931\u8d25')\n//   // });\n// }\n\nexport default () => {\n  const uploadProps = {\n    value:\n      'https://filebuck.oss-cn-hangzhou.aliyuncs.com/fsUpload/03cc1b5f20af25b9_154x154.png',\n    limitType: ['image/jpeg', 'image/jpg', 'image/png'],\n    unit: 'MB',\n    errText: '\u4ec5\u652f\u6301jpg png\u683c\u5f0f\u56fe\u7247!',\n    // \u662f\u5426\u663e\u793a\u4e0a\u4f20\u6587\u4ef6\u5217\u8868\n    showListBool: true,\n    // \u591a\u9009\u6587\u4ef6\n    // multiple: true,\n    // \u56de\u4f20\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868\n    onChange(val) {\n      console.log(val);\n    },\n    // \u4e0a\u4f20\u63a5\u53e3\n    // uploadFileFun () {\n\n    // }\n  };\n  return (\n    <div>\n      <Upload {...uploadProps} />\n    </div>\n  );\n};",
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'Upload',
            identifier: 'Upload-demo',
          },
        },
        'Upload-demo-1': {
          component: Object(o['c'])({
            loader: (function() {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  var n, a, l, o;
                  return r.a.wrap(function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t('TqRt')),
                            (e.t0 = n),
                            (e.next = 4),
                            Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                          );
                        case 4:
                          return (
                            (e.t1 = e.sent),
                            (a = (0, e.t0)(e.t1)),
                            (e.next = 8),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (o = function() {
                              var e = {
                                value: '',
                                dragBool: !0,
                                limitType: ['text/csv'],
                                errText:
                                  '\u4ec5\u652f\u6301csv\u683c\u5f0f\u7684\u6587\u4ef6!',
                                unit: 'MB',
                                listType: 'text',
                                multiple: !0,
                                onChange: function(e) {
                                  console.log(e);
                                },
                              };
                              return a['default'].createElement(l.Upload, e);
                            }),
                            e.abrupt('return', o)
                          );
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function n() {
                return e.apply(this, arguments);
              }
              return n;
            })(),
          }),
          previewerProps: {
            sources: {
              _: {
                tsx:
                  "import React from 'react';\n// import { UploadOutlined, InboxOutlined } from '@ant-design/icons';\nimport { Button } from 'antd';\nimport { Upload } from 'fudata-ui';\n\n// import 'antd/dist/antd.css';\n\nexport default () => {\n  const uploadProps = {\n    value: '',\n    dragBool: true, // \u5f00\u542f\u62d6\u52a8\u4e0a\u4f20\n    limitType: ['text/csv'],\n    errText: '\u4ec5\u652f\u6301csv\u683c\u5f0f\u7684\u6587\u4ef6!',\n    unit: 'MB',\n    listType: 'text',\n    multiple: true,\n    // uploadBtnSlot: (\n    //   // <div>\n    //   //   <Button icon={<UploadOutlined />}>Select File</Button>\n    //   // </div>\n    //   <>\n    //     <p className=\"ant-upload-drag-icon\">\n    //       <InboxOutlined />\n    //     </p>\n    //     <p className=\"ant-upload-text\">Click or drag file to this area to upload</p>\n    //     <p className=\"ant-upload-hint\">\n    //       Support for a single or bulk upload. Strictly prohibit from uploading company data or other\n    //       band files\n    //     </p>\n    //   </>\n    // ),\n    onChange(val) {\n      console.log(val);\n    },\n  };\n  return <Upload {...uploadProps} />;\n};",
              },
            },
            dependencies: {
              react: { version: '17.0.2' },
              'fudata-ui': { version: '1.0.2-2' },
            },
            componentName: 'Upload',
            identifier: 'Upload-demo-1',
          },
        },
      };
    },
    V9nZ: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('q1tI'),
        l = t.n(a),
        r = t('asP9'),
        o = t('ngFD'),
        s = t('Rsk4'),
        i = l.a.memo(s['default']['SelectTable-demo'].component),
        u = l.a.memo(s['default']['SelectTable-demo-1'].component);
      n['default'] = e => (
        l.a.useEffect(() => {
          var n;
          null !== e &&
            void 0 !== e &&
            null !== (n = e.location) &&
            void 0 !== n &&
            n.hash &&
            r['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h2',
                { id: '\u53ef\u9009\u62e9\u7684\u8868\u683c' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u53ef\u9009\u62e9\u7684\u8868\u683c',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u53ef\u9009\u62e9\u7684\u8868\u683c',
              ),
            ),
            l.a.createElement(
              o['default'],
              s['default']['SelectTable-demo'].previewerProps,
              l.a.createElement(i, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h2',
                { id: '\u4e0d\u53ef\u7f16\u8f91\u7684\u8868\u683c' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u4e0d\u53ef\u7f16\u8f91\u7684\u8868\u683c',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u4e0d\u53ef\u7f16\u8f91\u7684\u8868\u683c',
              ),
            ),
            l.a.createElement(
              o['default'],
              s['default']['SelectTable-demo-1'].previewerProps,
              l.a.createElement(u, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: '\u5c5e\u6027' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u5c5e\u6027', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u5c5e\u6027',
              ),
              l.a.createElement(
                'table',
                null,
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', null, '\u53c2\u6570'),
                    l.a.createElement('th', null, '\u8bf4\u660e'),
                    l.a.createElement('th', null, '\u7c7b\u578b'),
                    l.a.createElement('th', null, '\u53ef\u9009\u503c'),
                    l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  ),
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'initColums'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9ed8\u8ba4\u503c\u8868\u5934',
                    ),
                    l.a.createElement('td', null, 'Array'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'data'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u8868\u683c\u5217\u8868\u9879',
                    ),
                    l.a.createElement('td', null, 'Array'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'initData'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9ed8\u8ba4\u9009\u62e9\u7684\u5217\u8868',
                    ),
                    l.a.createElement('td', null, 'Array'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'rowKey'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u8868\u683c\u884c key \u7684\u53d6\u503c\uff0c\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u51fd\u6570',
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement(
                        'code',
                        null,
                        'string / function(record): string',
                      ),
                    ),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, 'key'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onChange'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7528\u4e8e\u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\u7684\u5217\u8868',
                    ),
                    l.a.createElement('td', null, 'function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '() => ', '{', '}'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'rowSelect'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7528\u4e8e\u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\u7684\u5217\u8868',
                    ),
                    l.a.createElement('td', null, 'function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '() => ', '{', '}'),
                  ),
                ),
              ),
              l.a.createElement(
                'h4',
                { id: 'rowselection' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#rowselection', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'rowSelection',
              ),
              l.a.createElement(
                'table',
                null,
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', null, '\u53c2\u6570'),
                    l.a.createElement('th', null, '\u8bf4\u660e'),
                    l.a.createElement('th', null, '\u7c7b\u578b'),
                    l.a.createElement('th', null, '\u53ef\u9009\u503c'),
                    l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  ),
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'checkStrictly'),
                    l.a.createElement(
                      'td',
                      null,
                      'checkable \u72b6\u6001\u4e0b\u8282\u70b9\u9009\u62e9\u5b8c\u5168\u53d7\u63a7\uff08\u7236\u5b50\u6570\u636e\u9009\u4e2d\u72b6\u6001\u4e0d\u518d\u5173\u8054\uff09',
                    ),
                    l.a.createElement('td', null, 'boolean'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, 'true'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'columnTitle'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u81ea\u5b9a\u4e49\u5217\u8868\u9009\u62e9\u6846\u6807\u9898',
                    ),
                    l.a.createElement('td', null, 'ReactNode'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'columnWidth'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u81ea\u5b9a\u4e49\u5217\u8868\u9009\u62e9\u6846\u5bbd\u5ea6',
                    ),
                    l.a.createElement('td', null, 'string / number'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '32px'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'fixed'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u628a\u9009\u62e9\u6846\u5217\u56fa\u5b9a\u5728\u5de6\u8fb9',
                    ),
                    l.a.createElement('td', null, 'boolean'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'getCheckboxProps'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9009\u62e9\u6846\u7684\u9ed8\u8ba4\u5c5e\u6027\u914d\u7f6e',
                    ),
                    l.a.createElement('td', null, 'function(record)'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'hideSelectAll'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9690\u85cf\u5168\u9009\u52fe\u9009\u6846\u4e0e\u81ea\u5b9a\u4e49\u9009\u62e9\u9879',
                    ),
                    l.a.createElement('td', null, 'boolean'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, 'false'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'preserveSelectedRowKeys'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u5f53\u6570\u636e\u88ab\u5220\u9664\u65f6\u4ecd\u7136\u4fdd\u7559\u9009\u9879\u7684 key',
                    ),
                    l.a.createElement('td', null, 'boolean'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'renderCell'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u6e32\u67d3\u52fe\u9009\u6846\uff0c\u7528\u6cd5\u4e0e Column \u7684 render \u76f8\u540c',
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      'function(checked, record, index, originNode)',
                    ),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '{', '}'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'selectedRowKeys'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u6307\u5b9a\u9009\u4e2d\u9879\u7684 key \u6570\u7ec4\uff0c\u9700\u8981\u548c onChange \u8fdb\u884c\u914d\u5408',
                    ),
                    l.a.createElement('td', null, 'string[] / number[]'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'defaultSelectedRowKeys'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9ed8\u8ba4\u9009\u4e2d\u9879\u7684 key \u6570\u7ec4',
                    ),
                    l.a.createElement('td', null, 'string[] / number[]'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'selections'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u81ea\u5b9a\u4e49\u9009\u62e9\u9879 \u914d\u7f6e\u9879, \u8bbe\u4e3a true \u65f6\u4f7f\u7528\u9ed8\u8ba4\u9009\u62e9\u9879',
                    ),
                    l.a.createElement('td', null, 'object[] / boolean'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, 'true'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'type'),
                    l.a.createElement('td', null, '\u591a\u9009/\u5355\u9009'),
                    l.a.createElement('td', null, 'checkbox / radio'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, 'checkbox'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onChange'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u65f6\u7684\u56de\u8c03',
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      'function(selectedRowKeys, selectedRows)',
                    ),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onSelect'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7528\u6237\u624b\u52a8\u9009\u62e9/\u53d6\u6d88\u9009\u62e9\u67d0\u884c\u7684\u56de\u8c03',
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      'function(record, selected, selectedRows, nativeEvent)',
                    ),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onSelectAll'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7528\u6237\u624b\u52a8\u9009\u62e9/\u53d6\u6d88\u9009\u62e9\u6240\u6709\u884c\u7684\u56de\u8c03',
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      'function(selected, selectedRows, changeRows)',
                    ),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onSelectInvert'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7528\u6237\u624b\u52a8\u9009\u62e9\u53cd\u9009\u7684\u56de\u8c03',
                    ),
                    l.a.createElement('td', null, 'function(selectedRowKeys)'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onSelectNone'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u7528\u6237\u6e05\u7a7a\u9009\u62e9\u7684\u56de\u8c03',
                    ),
                    l.a.createElement('td', null, 'function()'),
                    l.a.createElement('td', null, '-'),
                    l.a.createElement('td', null, '-'),
                  ),
                ),
              ),
            ),
          ),
        )
      );
    },
    ngFD: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('q1tI'),
        l = t.n(a),
        r = t('k3GJ'),
        o = t('9kvl'),
        s = t('asP9'),
        i = t('I3GT');
      t('FBQm');
      function u(e, n) {
        return p(e) || f(e, n) || d(e, n) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function d(e, n) {
        if (e) {
          if ('string' === typeof e) return m(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(e)
              : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? m(e, n)
              : void 0
          );
        }
      }
      function m(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      function f(e, n) {
        var t =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != t) {
          var a,
            l,
            r = [],
            o = !0,
            s = !1;
          try {
            for (t = t.call(e); !(o = (a = t.next()).done); o = !0)
              if ((r.push(a.value), n && r.length === n)) break;
          } catch (i) {
            (s = !0), (l = i);
          } finally {
            try {
              o || null == t['return'] || t['return']();
            } finally {
              if (s) throw l;
            }
          }
          return r;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      function h(e, n) {
        var t,
          a =
            null === (t = e.match(/\.(\w+)$/)) || void 0 === t ? void 0 : t[1];
        return a || (a = n.tsx ? 'tsx' : 'jsx'), a;
      }
      var b = function(e) {
        var n,
          t,
          c,
          d = Object(a['useRef'])(),
          m = Object(a['useContext'])(s['context']),
          f = m.locale,
          p = Object(s['useLocaleProps'])(f, e),
          b = Object(s['useDemoUrl'])(p.identifier),
          y = p.demoUrl || b,
          v =
            (null === o['a'] || void 0 === o['a']
              ? void 0
              : o['a'].location.hash) === '#'.concat(p.identifier),
          g = 1 === Object.keys(p.sources).length,
          E = Object(s['useCodeSandbox'])(
            (null === (n = p.hideActions) || void 0 === n
            ? void 0
            : n.includes('CSB'))
              ? null
              : p,
          ),
          x = Object(s['useRiddle'])(
            (null === (t = p.hideActions) || void 0 === t
            ? void 0
            : t.includes('RIDDLE'))
              ? null
              : p,
          ),
          k = Object(s['useMotions'])(p.motions || [], d.current),
          w = u(k, 2),
          T = w[0],
          j = w[1],
          R = Object(s['useCopy'])(),
          C = u(R, 2),
          S = C[0],
          F = C[1],
          P = Object(a['useState'])('_'),
          I = u(P, 2),
          N = I[0],
          B = I[1],
          D = Object(a['useState'])(h(N, p.sources[N])),
          O = u(D, 2),
          V = O[0],
          _ = O[1],
          L = Object(a['useState'])(Boolean(p.defaultShowCode)),
          q = u(L, 2),
          A = q[0],
          U = q[1],
          H = Object(a['useState'])(Math.random()),
          K = u(H, 2),
          M = K[0],
          Y = K[1],
          z = p.sources[N][V] || p.sources[N].content,
          J = Object(s['useTSPlaygroundUrl'])(f, z),
          Q = Object(a['useRef'])(),
          G = Object(s['usePrefersColor'])(),
          X = u(G, 1),
          $ = X[0];
        function W(e) {
          B(e), _(h(e, p.sources[e]));
        }
        return (
          Object(a['useEffect'])(
            function() {
              Y(Math.random());
            },
            [$],
          ),
          l.a.createElement(
            'div',
            {
              style: p.style,
              className: [
                p.className,
                '__dumi-default-previewer',
                v ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: p.identifier,
              'data-debug': p.debug || void 0,
              'data-iframe': p.iframe || void 0,
            },
            p.iframe &&
              l.a.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            l.a.createElement(
              'div',
              {
                ref: d,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: p.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    p.compact || (p.iframe && !1 !== p.compact) ? '0' : void 0,
                  background: p.background,
                },
              },
              p.iframe
                ? l.a.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(p.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: M,
                    src: y,
                    ref: Q,
                  })
                : p.children,
            ),
            l.a.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': p.title,
              },
              p.title &&
                l.a.createElement(
                  s['AnchorLink'],
                  { to: '#'.concat(p.identifier) },
                  p.title,
                ),
              p.description &&
                l.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: p.description },
                }),
            ),
            l.a.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              E &&
                l.a.createElement('button', {
                  title: 'Open demo on CodeSandbox.io',
                  className: '__dumi-default-icon',
                  role: 'codesandbox',
                  onClick: E,
                }),
              x &&
                l.a.createElement('button', {
                  title: 'Open demo on Riddle',
                  className: '__dumi-default-icon',
                  role: 'riddle',
                  onClick: x,
                }),
              p.motions &&
                l.a.createElement('button', {
                  title: 'Execute motions',
                  className: '__dumi-default-icon',
                  role: 'motions',
                  disabled: j,
                  onClick: function() {
                    return T();
                  },
                }),
              p.iframe &&
                l.a.createElement('button', {
                  title: 'Reload demo iframe page',
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: function() {
                    return Y(Math.random());
                  },
                }),
              !(null === (c = p.hideActions) || void 0 === c
                ? void 0
                : c.includes('EXTERNAL')) &&
                l.a.createElement(
                  s['Link'],
                  { target: '_blank', to: y },
                  l.a.createElement('button', {
                    title: 'Open demo in new tab',
                    className: '__dumi-default-icon',
                    role: 'open-demo',
                    type: 'button',
                  }),
                ),
              l.a.createElement('span', null),
              l.a.createElement('button', {
                title: 'Copy source code',
                className: '__dumi-default-icon',
                role: 'copy',
                'data-status': F,
                onClick: function() {
                  return S(z);
                },
              }),
              'tsx' === V &&
                A &&
                l.a.createElement(
                  s['Link'],
                  { target: '_blank', to: J },
                  l.a.createElement('button', {
                    title: 'Get JSX via TypeScript Playground',
                    className: '__dumi-default-icon',
                    role: 'change-tsx',
                    type: 'button',
                  }),
                ),
              l.a.createElement('button', {
                title: 'Toggle source code panel',
                className: '__dumi-default-icon'.concat(
                  A ? ' __dumi-default-btn-expand' : '',
                ),
                role: 'source',
                type: 'button',
                onClick: function() {
                  return U(!A);
                },
              }),
            ),
            A &&
              l.a.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !g &&
                  l.a.createElement(
                    r['b'],
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: N,
                      onChange: W,
                    },
                    Object.keys(p.sources).map(function(e) {
                      return l.a.createElement(r['a'], {
                        tab:
                          '_' === e ? 'index.'.concat(h(e, p.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                l.a.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  l.a.createElement(i['a'], { code: z, lang: V, showCopy: !1 }),
                ),
              ),
          )
        );
      };
      n['default'] = b;
    },
    x2v5: function(e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
