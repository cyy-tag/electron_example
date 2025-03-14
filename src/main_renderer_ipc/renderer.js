// 发送消息给主进程
window.electronAPI.sendMessage('Hello from renderer!');

// 监听主进程的回复
window.electronAPI.onMessage((message) => {
  console.log('Received from main:', message);
});
