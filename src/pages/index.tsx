import { useState } from 'react';
import yayJpg from '../assets/welcome.gif';

export default function HomePage() {
  const [msg, setMsg] = useState();
  const onClick = async () => {
    const res = await $api.hello();
    setMsg(res);
  };
  return (
    <div>
      <h2>Welcome to umi with electron!</h2>
      <p>
        <img src={yayJpg} width="200" />
      </p>
      <p>@umijs/plugin-electron@0.2.x</p>
      <p>支持了热更新</p>
      <ol>
        <li>
          点击这个➡️{' '}
          <button
            onClick={async () => {
              onClick();
            }}
          >
            发送 ipc 请求
          </button>
        </li>
        <li>
          <p>
            然后修改 <code>src/main/ipc/index.ts line 4</code> 后再点一次再试试
          </p>
        </li>
      </ol>

      <p>主进程消息：{msg}</p>

      <p>
        丝滑的话给我
        <a
          href="javascript:void(0);"
          onClick={() => {
            $api.openExternal(
              'https://github.com/xiefengnian/umijs-electron-plugin'
            );
          }}
        >
          来个 start 吧
        </a>
        ！
      </p>
    </div>
  );
}
