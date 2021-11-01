import React from 'react'

// components
import { Divider, Rate, Icon, Avatar } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: '具备扎实的 Javascript 基础，熟练使用 ES6、ES7、... 语法。',
    rate: 4,
  },
  {
    label: '熟悉 React 并理解其原理，熟悉 Vue 框架及其用法。',
    rate: 4,
  },
  {
    label: '熟悉 UniApp 框架及H5和App开发',
    rate: 4,
  },
  {
    label: '熟悉 使用 Webpack 打包工具，熟悉常用工程化和模块化方案。',
    rate: 3,
  },
  {
    label: '熟悉 NodeJs Koa、Mysql，针对需求可以做到简单的数据库设计、接口的开发与设计！',
    rate: 3,
  },
  {
    label: '了解 HTTP 协议，缓存、性能优化、安全等，了解浏览器原理。',
    rate: 3,
  },
  {
    label: '熟悉常用的算法与数据结构',
    rate: 3,
  },
  {
    label: '熟悉Flutter + Dart + MaterialDesign App跨平台开发',
    rate: 3,
  },
]

const MyInfo = () => {
  return (
    <>
      <Divider orientation='left'>博客简述</Divider>
      <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
      <p>
        源码地址为 <Href href='https://github.com/MikeyHall/react-blog'>github</Href>
        ，仅供参考，不做商业用途！
      </p>

      <Divider orientation='left'>关于我</Divider>

      <ul className='about-list'>
        <li>姓名：gold</li>
        <li>专业：电子商务</li>
        <li>
          联系方式：
          {/*  <Icon type='qq' /> 434358603
          <Divider type='vertical' /> */}
          <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
          <a href='mailto:alvin00216@163.com'>wangyimiao666@gmail.com</a>
        </li>
        <li>坐标：成都市</li>
        <li>
          其他博客地址：
          <Href href='http://www.goldglitter.top/web'>gold-web</Href>
          <Divider type='vertical' />
        </li>
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
        <li>
          其他
          <ul>
            <li>常用开发工具： vscode、webstorm、git</li>
            <li>熟悉的 UI 框架： antd、element-ui、uView 等</li>
            <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
          </ul>
        </li>
        <li>
          个人
          <ul>
            <li>欢迎交流！</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
