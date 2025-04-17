"use client";

import React from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// 定義表單數據介面
interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  // 表單提交函數
  const onFinish = (values: ContactFormValues) => {
    console.log('表單資料:', values);
    // 這裡可以添加 API 呼叫來處理表單提交
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-white">讓我們開始合作</h3>
        <p className="mb-8 text-blue-100">
          無論您需要建立新網站、改善現有系統，或是開發 Line 聊天機器人，我都能提供專業的諮詢與服務。
          填寫表單或直接聯繫我，讓我們一起討論您的專案需求。
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <MailOutlined className="mr-4 text-xl" />
            <span>leonard@example.com</span>
          </div>
          <div className="flex items-center">
            <PhoneOutlined className="mr-4 text-xl" />
            <span>0900-123-456</span>
          </div>
          <div className="flex items-center">
            <MessageOutlined className="mr-4 text-xl" />
            <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">加我的 LINE</a>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item 
              label={<span className="text-gray-700 font-bold">姓名</span>} 
              name="name"
              rules={[{ required: true, message: '請輸入您的姓名' }]}
            >
              <Input placeholder="請輸入您的姓名" />
            </Form.Item>
            <Form.Item 
              label={<span className="text-gray-700 font-bold">Email</span>} 
              name="email"
              rules={[
                { required: true, message: '請輸入您的Email' },
                { type: 'email', message: '請輸入有效的Email地址' }
              ]}
            >
              <Input placeholder="請輸入您的Email" />
            </Form.Item>
            <Form.Item 
              label={<span className="text-gray-700 font-bold">主旨</span>} 
              name="subject"
              rules={[{ required: true, message: '請輸入主旨' }]}
            >
              <Input placeholder="請輸入主旨" />
            </Form.Item>
            <Form.Item 
              label={<span className="text-gray-700 font-bold">訊息</span>} 
              name="message"
              rules={[{ required: true, message: '請輸入您的訊息' }]}
            >
              <TextArea rows={5} placeholder="請描述您的專案需求" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large" className="bg-blue-600 hover:bg-blue-700">
                送出訊息
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}