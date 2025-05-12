function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weightJin = parseFloat(document.getElementById("weight").value);
    const resultEl = document.getElementById("result");
  
    if (!height || !weightJin || height <= 0 || weightJin <= 0) {
      resultEl.textContent = "请输入正确的身高和体重！";
      return;
    }
  
    const weightKg = weightJin / 2;
    const heightM = height / 100;
    const bmi = weightKg / (heightM * heightM);
    let status = "";
  
    if (bmi < 18.5) status = "过轻";
    else if (bmi < 25) status = "正常";
    else if (bmi < 28) status = "过重";
    else if (bmi < 32) status = "肥胖";
    else status = "严重肥胖";
  
    resultEl.textContent = `您的 BMI 是 ${bmi.toFixed(2)}，属于「${status}」`;
  }
  