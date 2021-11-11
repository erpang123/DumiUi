(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
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
                  var n, a, l, o, s, u, c;
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
                            (u = e.sent),
                            (c = function() {
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
                                  u.Button,
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
                            e.abrupt('return', c)
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
                  var n, a, l, o, s, u, c;
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
                            (u = e.sent),
                            (c = function() {
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
                                  u.Form,
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
                            e.abrupt('return', c)
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
                  var n, a, l, o, s, u, c;
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
                            (u = e.sent),
                            (c = function() {
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
                                u.Form,
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
                            e.abrupt('return', c)
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
                  var n, a, l, o, s, u, c;
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
                            (u = e.sent),
                            (e.next = 20),
                            t.e(22).then(t.t.bind(null, 'mzNo', 7))
                          );
                        case 20:
                          return (
                            (c = function() {
                              var e = (0, o.useRef)(),
                                n = (0, o.useState)([]),
                                t = (0, l['default'])(n, 2),
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
                                i = function() {
                                  var n = JSON.parse(JSON.stringify(a));
                                  (n[0].cs = 'asdafasd'),
                                    e.current.setFieldsValue({ formRow: n });
                                },
                                m = function() {
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
                                  o['default'].createElement(u.FormTable, {
                                    onRef: function(n) {
                                      return (e.current = n);
                                    },
                                    columns: c,
                                    dataSource: a,
                                  }),
                                  o['default'].createElement(
                                    'div',
                                    { style: { marginTop: '15px' } },
                                    o['default'].createElement(
                                      s.Button,
                                      {
                                        onClick: m,
                                        style: { marginRight: '16px' },
                                      },
                                      'submit',
                                    ),
                                    o['default'].createElement(
                                      s.Button,
                                      { onClick: i },
                                      'fill-value',
                                    ),
                                  ),
                                )
                              );
                            }),
                            e.abrupt('return', c)
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
                  var n, a, l, o, s, u, c;
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
                            (u = e.sent),
                            (c = function() {
                              var e = s.Form.useForm(),
                                n = (0, l['default'])(e, 1),
                                t = n[0],
                                a = (0, o.useState)([]),
                                r = (0, l['default'])(a, 2),
                                c = r[0],
                                i = r[1],
                                m = [
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
                                d = function() {
                                  var e = JSON.parse(JSON.stringify(c));
                                  (e[0].cs = 'asdafasd'),
                                    t.setFieldsValue({
                                      note: 'Hello world!',
                                      formRowKey: e,
                                    });
                                },
                                p = function() {
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
                                  i(e), t.setFieldsValue({ formRowKey: e });
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
                                    o['default'].createElement(u.FormTable, {
                                      formRowKey: 'formRowKey',
                                      columns: m,
                                      dataSource: c,
                                    }),
                                  ),
                                  o['default'].createElement(
                                    'div',
                                    { style: { marginTop: '15px' } },
                                    o['default'].createElement(
                                      s.Button,
                                      {
                                        onClick: p,
                                        style: { marginRight: '16px' },
                                      },
                                      'submit',
                                    ),
                                    o['default'].createElement(
                                      s.Button,
                                      { onClick: d },
                                      'fill-value',
                                    ),
                                  ),
                                )
                              );
                            }),
                            e.abrupt('return', c)
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
                  var n, a, l, o, s, u, c, i;
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
                            (u = e.sent),
                            (e.next = 22),
                            Promise.all([t.e(0), t.e(1), t.e(3), t.e(4)]).then(
                              t.bind(null, '/7QA'),
                            )
                          );
                        case 22:
                          return (
                            (c = e.sent),
                            (i = function() {
                              var e = (0, s.useRef)(),
                                n = (0, s.useState)([]),
                                t = (0, o['default'])(n, 2),
                                a = t[0],
                                r = t[1],
                                i = [
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
                                m = function() {
                                  e.current
                                    .validateFields()
                                    .then(function(e) {
                                      console.log(e);
                                    })
                                    ['catch'](function(e) {
                                      console.log(e);
                                    });
                                },
                                d = function() {
                                  e.current.resetFields();
                                },
                                p = function() {
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
                                f = {
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
                                        ].createElement(c.FormTable, {
                                          formRowKey: 'formRowKey',
                                          columns: i,
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
                                    c.Form,
                                    (0, l['default'])(
                                      {
                                        onRef: function(n) {
                                          return (e.current = n);
                                        },
                                      },
                                      f,
                                    ),
                                  ),
                                  s['default'].createElement(
                                    'div',
                                    null,
                                    s['default'].createElement(
                                      u.Button,
                                      {
                                        className: 'submit-btn',
                                        type: 'primary',
                                        onClick: m,
                                        htmlType: 'submit',
                                      },
                                      'Submit',
                                    ),
                                    s['default'].createElement(
                                      u.Button,
                                      {
                                        className: 'reset-btn',
                                        onClick: d,
                                        htmlType: 'button',
                                        style: { marginLeft: '8px' },
                                      },
                                      'Reset',
                                    ),
                                    s['default'].createElement(
                                      u.Button,
                                      {
                                        className: 'set-default-btn',
                                        type: 'link',
                                        htmlType: 'button',
                                        style: { marginLeft: '8px' },
                                        onClick: p,
                                      },
                                      'Fill form',
                                    ),
                                  ),
                                )
                              );
                            }),
                            e.abrupt('return', i)
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
    TW8W: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('q1tI'),
        l = t.n(a),
        r = t('asP9'),
        o = t('ngFD'),
        s = t('Rsk4'),
        u = l.a.memo(s['default']['Form-demo'].component),
        c = l.a.memo(s['default']['Form-demo-1'].component);
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
                { id: 'form' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#form', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Form',
              ),
              l.a.createElement(
                'h3',
                { id: '\u7eb5\u5411\u8868\u5355\u6846' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u7eb5\u5411\u8868\u5355\u6846',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7eb5\u5411\u8868\u5355\u6846',
              ),
            ),
            l.a.createElement(
              o['default'],
              s['default']['Form-demo'].previewerProps,
              l.a.createElement(u, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: '\u6a2a\u5411\u641c\u7d22\u6846' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u6a2a\u5411\u641c\u7d22\u6846',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6a2a\u5411\u641c\u7d22\u6846',
              ),
            ),
            l.a.createElement(
              o['default'],
              s['default']['Form-demo-1'].previewerProps,
              l.a.createElement(c, null),
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
                    l.a.createElement('td', null, 'formProps'),
                    l.a.createElement(
                      'td',
                      null,
                      'form \u7684\u901a\u7528\u5c5e\u6027\uff08\u53c2\u8003 antd \u4e2d from \u7684 api\uff09',
                    ),
                    l.a.createElement('td', null, 'Object'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'dataList'),
                    l.a.createElement('td', null, '\u5217\u8868\u9879'),
                    l.a.createElement('td', null, 'Array'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onFinish'),
                    l.a.createElement('td', null, '\u6210\u529f\u51fd\u6570'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onFinishFailed'),
                    l.a.createElement('td', null, '\u5931\u8d25\u51fd\u6570'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onRef'),
                    l.a.createElement(
                      'td',
                      null,
                      'Form \u5bf9\u8c61\uff08\u4e0d\u4f20\u65f6\u8fd4\u56de\u7684\u8282\u70b9\u6ca1\u6709form\u5305\u542b\uff0c\u4f20\u5165\u65f6\u4f1a\u8fd4\u56de\u5185\u90e8\u7684form\u5bf9\u8c61\uff09',
                    ),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                ),
              ),
              l.a.createElement('hr', null),
              l.a.createElement(
                'h4',
                { id: 'formprops' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#formprops', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'formProps',
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
                    l.a.createElement('td', null, 'colon'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u914d\u7f6e Form.Item \u7684 colon \u7684\u9ed8\u8ba4\u503c\u3002\u8868\u793a\u662f\u5426\u663e\u793a label \u540e\u9762\u7684\u5192\u53f7 (\u53ea\u6709\u5728\u5c5e\u6027 layout \u4e3a horizontal \u65f6\u6709\u6548)',
                    ),
                    l.a.createElement('td', null, 'boolean'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, 'true'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'component'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u8bbe\u7f6e Form \u6e32\u67d3\u5143\u7d20\uff0c\u4e3a false \u5219\u4e0d\u521b\u5efa DOM \u8282\u70b9',
                    ),
                    l.a.createElement('td', null, 'ComponentType'),
                    l.a.createElement('td', null, 'false'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'initialValues'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u8868\u5355\u9ed8\u8ba4\u503c\uff0c\u53ea\u6709\u521d\u59cb\u5316\u4ee5\u53ca\u91cd\u7f6e\u65f6\u751f\u6548',
                    ),
                    l.a.createElement('td', null, 'object'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'labelAlign'),
                    l.a.createElement(
                      'td',
                      null,
                      'label \u6807\u7b7e\u7684\u6587\u672c\u5bf9\u9f50\u65b9\u5f0f',
                    ),
                    l.a.createElement('td', null, 'left'),
                    l.a.createElement('td', null, 'right'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'labelCol'),
                    l.a.createElement(
                      'td',
                      null,
                      'label \u6807\u7b7e\u5e03\u5c40\uff0c\u540c Col \u7ec4\u4ef6\uff0c\u8bbe\u7f6e span offset \u503c\uff0c\u5982 ',
                      '{',
                      'span: 3, offset: 12',
                      '}',
                      ' \u6216 sm: ',
                      '{',
                      'span: 3, offset: 12',
                      '}',
                    ),
                    l.a.createElement('td', null, 'object'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '{', ' span: 8 ', '}'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'layout'),
                    l.a.createElement('td', null, '\u8868\u5355\u5e03\u5c40'),
                    l.a.createElement('td', null, 'horizontal'),
                    l.a.createElement('td', null, 'vertical'),
                    l.a.createElement('td', null, 'inline'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'wrapperCol'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9700\u8981\u4e3a\u8f93\u5165\u63a7\u4ef6\u8bbe\u7f6e\u5e03\u5c40\u6837\u5f0f\u65f6\uff0c\u4f7f\u7528\u8be5\u5c5e\u6027\uff0c\u7528\u6cd5\u540c labelCol',
                    ),
                    l.a.createElement('td', null, 'object'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '{', ' span: 16 ', '}'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'size'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u8bbe\u7f6e\u5b57\u6bb5\u7ec4\u4ef6\u7684\u5c3a\u5bf8\uff08\u4ec5\u9650 antd \u7ec4\u4ef6\uff09',
                    ),
                    l.a.createElement('td', null, 'small'),
                    l.a.createElement('td', null, 'middle'),
                    l.a.createElement('td', null, 'large'),
                  ),
                ),
              ),
              l.a.createElement('hr', null),
              l.a.createElement(
                'h3',
                { id: 'datalist-\u7684\u5355\u4e2a\u5bf9\u8c61' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#datalist-\u7684\u5355\u4e2a\u5bf9\u8c61',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'dataList \u7684\u5355\u4e2a\u5bf9\u8c61',
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
                    l.a.createElement('td', null, 'type'),
                    l.a.createElement('td', null, '\u8868\u5355\u7c7b\u578b'),
                    l.a.createElement('td', null, 'String'),
                    l.a.createElement(
                      'td',
                      null,
                      'Input, Button, Select, Checkbox, slot',
                    ),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'placeholder'),
                    l.a.createElement('td', null, '\u63d0\u793a'),
                    l.a.createElement('td', null, 'String'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'selfLayout'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u6bcf\u4e2a\u5217\u8868\u7684\u5e03\u5c40',
                    ),
                    l.a.createElement('td', null, 'Object'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement(
                      'td',
                      null,
                      '{',
                      'labelCol: ',
                      '{',
                      ' span: 8 ',
                      '}',
                      ', wrapperCol: ',
                      '{',
                      ' span: 16 ',
                      '}',
                      '}',
                    ),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'label'),
                    l.a.createElement(
                      'td',
                      null,
                      'label \u6807\u7b7e\u7684\u6587\u672c',
                    ),
                    l.a.createElement('td', null, 'ReactNode'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'key'),
                    l.a.createElement('td', null, 'key \u503c'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'name'),
                    l.a.createElement('td', null, '\u8868\u5355\u540d\u79f0'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'rules'),
                    l.a.createElement('td', null, '\u6821\u9a8c\u89c4\u5219'),
                    l.a.createElement('td', null, 'Rule[]'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                ),
              ),
              l.a.createElement('hr', null),
              l.a.createElement(
                'h3',
                { id: 'typebutton' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#typebutton', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'type=Button',
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
                    l.a.createElement('td', null, 'btnType'),
                    l.a.createElement('td', null, '\u6309\u94ae\u7c7b\u578b'),
                    l.a.createElement('td', null, 'String'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, "'default"),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'htmlType'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u8bbe\u7f6e button \u539f\u751f\u7684 type \u503c',
                    ),
                    l.a.createElement('td', null, 'string'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, 'button'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'btnText'),
                    l.a.createElement('td', null, '\u6309\u94ae\u6587\u6848'),
                    l.a.createElement('td', null, 'String'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onClick'),
                    l.a.createElement('td', null, '\u70b9\u51fb\u4e8b\u4ef6'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                ),
              ),
              l.a.createElement('hr', null),
              l.a.createElement(
                'h3',
                { id: 'typeselect' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#typeselect', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'type=Select',
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
                    l.a.createElement('td', null, 'optionLists'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u4e0b\u62c9\u5217\u8868\u9879',
                    ),
                    l.a.createElement('td', null, 'Array'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '[]'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onChange'),
                    l.a.createElement('td', null, '\u70b9\u51fb\u4e8b\u4ef6'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'allowClear'),
                    l.a.createElement('td', null, '\u6e05\u7a7a'),
                    l.a.createElement('td', null, 'Boolean'),
                    l.a.createElement('td', null, 'true, false'),
                    l.a.createElement('td', null, 'false'),
                  ),
                ),
              ),
              l.a.createElement('hr', null),
              l.a.createElement(
                'h3',
                { id: 'typeslot' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#typeslot', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'type=slot',
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
                    l.a.createElement('td', null, 'slotComponent'),
                    l.a.createElement('td', null, '\u63d2\u69fd'),
                    l.a.createElement('td', null, 'Function'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                ),
              ),
              l.a.createElement('hr', null),
              l.a.createElement(
                'h3',
                { id: 'typetreeselect' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#typetreeselect',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'type=treeSelect',
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
                    l.a.createElement('td', null, 'list'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u6811\u7ed3\u6784\u7684\u5217\u8868',
                    ),
                    l.a.createElement('td', null, 'Array'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                ),
              ),
              l.a.createElement(
                'h4',
                { id: 'treenode-props' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#treenode-props',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'TreeNode props',
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
                    l.a.createElement('td', null, 'value'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u9ed8\u8ba4\u6839\u636e\u6b64\u5c5e\u6027\u503c\u8fdb\u884c\u7b5b\u9009\uff08\u5176\u503c\u5728\u6574\u4e2a\u6811\u8303\u56f4\u5185\u552f\u4e00\uff09',
                    ),
                    l.a.createElement('td', null, 'string'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'title'),
                    l.a.createElement(
                      'td',
                      null,
                      '\u6811\u8282\u70b9\u663e\u793a\u7684\u5185\u5bb9',
                    ),
                    l.a.createElement('td', null, 'ReactNode/String'),
                    l.a.createElement('td', null, '\u2014'),
                    l.a.createElement('td', null, '\u2014'),
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
        u = t('I3GT');
      t('FBQm');
      function c(e, n) {
        return f(e) || p(e, n) || m(e, n) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function m(e, n) {
        if (e) {
          if ('string' === typeof e) return d(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(e)
              : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? d(e, n)
              : void 0
          );
        }
      }
      function d(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      function p(e, n) {
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
          } catch (u) {
            (s = !0), (l = u);
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
      function f(e) {
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
          i,
          m = Object(a['useRef'])(),
          d = Object(a['useContext'])(s['context']),
          p = d.locale,
          f = Object(s['useLocaleProps'])(p, e),
          b = Object(s['useDemoUrl'])(f.identifier),
          E = f.demoUrl || b,
          y =
            (null === o['a'] || void 0 === o['a']
              ? void 0
              : o['a'].location.hash) === '#'.concat(f.identifier),
          v = 1 === Object.keys(f.sources).length,
          g = Object(s['useCodeSandbox'])(
            (null === (n = f.hideActions) || void 0 === n
            ? void 0
            : n.includes('CSB'))
              ? null
              : f,
          ),
          x = Object(s['useRiddle'])(
            (null === (t = f.hideActions) || void 0 === t
            ? void 0
            : t.includes('RIDDLE'))
              ? null
              : f,
          ),
          k = Object(s['useMotions'])(f.motions || [], m.current),
          w = c(k, 2),
          T = w[0],
          j = w[1],
          F = Object(s['useCopy'])(),
          R = c(F, 2),
          C = R[0],
          I = R[1],
          P = Object(a['useState'])('_'),
          S = c(P, 2),
          N = S[0],
          B = S[1],
          D = Object(a['useState'])(h(N, f.sources[N])),
          O = c(D, 2),
          V = O[0],
          L = O[1],
          _ = Object(a['useState'])(Boolean(f.defaultShowCode)),
          q = c(_, 2),
          A = q[0],
          U = q[1],
          H = Object(a['useState'])(Math.random()),
          M = c(H, 2),
          z = M[0],
          Y = M[1],
          K = f.sources[N][V] || f.sources[N].content,
          J = Object(s['useTSPlaygroundUrl'])(p, K),
          Q = Object(a['useRef'])(),
          G = Object(s['usePrefersColor'])(),
          X = c(G, 1),
          $ = X[0];
        function W(e) {
          B(e), L(h(e, f.sources[e]));
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
              style: f.style,
              className: [
                f.className,
                '__dumi-default-previewer',
                y ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: f.identifier,
              'data-debug': f.debug || void 0,
              'data-iframe': f.iframe || void 0,
            },
            f.iframe &&
              l.a.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            l.a.createElement(
              'div',
              {
                ref: m,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: f.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    f.compact || (f.iframe && !1 !== f.compact) ? '0' : void 0,
                  background: f.background,
                },
              },
              f.iframe
                ? l.a.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(f.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: z,
                    src: E,
                    ref: Q,
                  })
                : f.children,
            ),
            l.a.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': f.title,
              },
              f.title &&
                l.a.createElement(
                  s['AnchorLink'],
                  { to: '#'.concat(f.identifier) },
                  f.title,
                ),
              f.description &&
                l.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: f.description },
                }),
            ),
            l.a.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              g &&
                l.a.createElement('button', {
                  title: 'Open demo on CodeSandbox.io',
                  className: '__dumi-default-icon',
                  role: 'codesandbox',
                  onClick: g,
                }),
              x &&
                l.a.createElement('button', {
                  title: 'Open demo on Riddle',
                  className: '__dumi-default-icon',
                  role: 'riddle',
                  onClick: x,
                }),
              f.motions &&
                l.a.createElement('button', {
                  title: 'Execute motions',
                  className: '__dumi-default-icon',
                  role: 'motions',
                  disabled: j,
                  onClick: function() {
                    return T();
                  },
                }),
              f.iframe &&
                l.a.createElement('button', {
                  title: 'Reload demo iframe page',
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: function() {
                    return Y(Math.random());
                  },
                }),
              !(null === (i = f.hideActions) || void 0 === i
                ? void 0
                : i.includes('EXTERNAL')) &&
                l.a.createElement(
                  s['Link'],
                  { target: '_blank', to: E },
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
                'data-status': I,
                onClick: function() {
                  return C(K);
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
                !v &&
                  l.a.createElement(
                    r['b'],
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: N,
                      onChange: W,
                    },
                    Object.keys(f.sources).map(function(e) {
                      return l.a.createElement(r['a'], {
                        tab:
                          '_' === e ? 'index.'.concat(h(e, f.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                l.a.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  l.a.createElement(u['a'], { code: K, lang: V, showCopy: !1 }),
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
