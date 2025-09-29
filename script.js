function showHelp(type) {
  let text = "";
  let smsMsg = "";
  let whatsappMsg = "";
  let phoneNum = "";

  if (type === "ambulance") {
    text = `
    🩹 تعليمات الإسعاف:
    - لو في نزيف: اضغط على الجرح بقطعة قماش نظيفة.
    - لو صباع اتقطع: حطه في محلول ميه وملح وتلج وخده على المستشفى.
    - لو في إغماء: شيك على التنفس وافتح مجرى التنفس.
    📞 جاري الاتصال بالإسعاف...`;

    phoneNum = "123";
    smsMsg = "محتاج إسعاف ضروري! العنوان: (اكتب عنوانك هنا).";
    whatsappMsg = "🚑 محتاج إسعاف حالًا! العنوان: (اكتب عنوانك هنا).";
  }

  else if (type === "police") {
    text = `
    👮‍♂️ تعليمات الشرطة:
    - في حالة اعتداء أو سرقة: ابعد عن الخطر فورًا.
    - التطبيق بيبعت موقعك للشرطة.
    📞 جاري الاتصال بالشرطة...`;

    phoneNum = "122";
    smsMsg = "محتاج مساعدة من الشرطة! العنوان: (اكتب عنوانك هنا).";
    whatsappMsg = "🚔 محتاج تدخل شرطة حالًا! العنوان: (اكتب عنوانك هنا).";
  }

  else if (type === "fire") {
    text = `
    🔥 تعليمات المطافي:
    - لو حريق كهربا: افصل الكهرباء ومتحطش ميه.
    - لو حريق صغير: استعمل الطفاية.
    - لو حريق كبير: اخرج فورًا وسيب المكان.
    📞 جاري الاتصال بالمطافي...`;

    phoneNum = "180";
    smsMsg = "في حريق! محتاج مطافي ضروري. العنوان: (اكتب عنوانك هنا).";
    whatsappMsg = "🔥 في حريق! محتاج مطافي حالًا. العنوان: (اكتب عنوانك هنا).";
  }

  // تحديث نص الإرشادات
  document.getElementById("helpText").innerText = text;

  // الاتصال الهاتفي
  window.open("tel:" + phoneNum);

  // إرسال SMS
  setTimeout(() => {
    window.open("sms:" + phoneNum + "?body=" + encodeURIComponent(smsMsg));
  }, 1000);

  // إرسال رسالة واتساب
  setTimeout(() => {
    window.open("https://wa.me/" + phoneNum + "?text=" + encodeURIComponent(whatsappMsg));
  }, 2000);
}


  // إرسال البلاغ لبايثون (لو شغال)
  sendReport(type, smsMsg);

