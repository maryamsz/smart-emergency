function showHelp(type) {
  let text = "";
  let smsMsg = "";
  let phoneNum = "";

  if (type === "ambulance") {
    location.href = "/aid.html";
  } else if (type === "police") {
    text = `
    👮‍♂️ تعليمات الشرطة:
    - في حالة اعتداء أو سرقة: ابعد عن الخطر فورًا.
    - التطبيق بيبعت موقعك للشرطة.
    📞 جاري الاتصال بالشرطة...`;

    phoneNum = "122";
    smsMsg = "محتاج مساعدة من الشرطة! العنوان: ";
  } else if (type === "fire") {
    text = `
    🔥 تعليمات المطافي:
    - لو حريق كهربا: افصل الكهرباء ومتحطش ميه.
    - لو حريق صغير: استعمل الطفاية.
    - لو حريق كبير: اخرج فورًا وسيب المكان.
    📞 جاري الاتصال بالمطافي...`;

    phoneNum = "180";
    smsMsg = "في حريق! محتاج مطافي ضروري. العنوان";
  }

  // تحديث نص الإرشادات
  document.getElementById("helpText").innerText = text;

  // الاتصال الهاتفي
  window.open("tel:" + phoneNum);

  // إرسال SMS
  setTimeout(() => {
    window.open("sms:" + phoneNum + "?body=" + encodeURIComponent(smsMsg));
  }, 1000);
}
