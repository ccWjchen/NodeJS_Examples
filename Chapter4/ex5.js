const totalFrame=10;
var frame=0;

function calculateFrame() {
  // 在此放入計算 frame 的程式
  console.log("計算第 %d 個 frame",frame);
  frame++;
  if (frame==totalFrame) {
    console.log("計算完畢");
  } else {
    process.nextTick(calculateFrame);
  }
}

process.nextTick(calculateFrame);
