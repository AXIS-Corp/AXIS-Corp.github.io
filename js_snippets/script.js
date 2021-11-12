

// OKB総研　フォームのメールアドレス確認
if (window.location.pathname === "/kenshu/kenshu-application/") {
    const emailInputs = document.querySelectorAll('.txt-email input, .txt-email-confirm input');
    const submitBtn = document.querySelector('.wpcf7-submit');
    let emailWarning = document.createElement("p");
    let emailErrorTxt = document.createTextNode("メールアドレスを確認してください。")
    emailWarning.style.display = "none";
    emailWarning.appendChild(emailErrorTxt);
    emailInputs[1].insertAdjacentElement('afterend', emailWarning);
    emailInputs.forEach(function(singleInput) {
      emailInputs[1].addEventListener("focusout", function(){
        if (emailInputs[1].value !== emailInputs[0].value) {
          submitBtn.style.pointerEvents = "none";
          emailWarning.style.display = "block";
          emailWarning.style.color = "red";
          emailWarning.style.paddingLeft = "5px";
        } else {
          submitBtn.style.pointerEvents = "all";
          emailWarning.style.display = "none";
        }
      })
    })
};


// OKB総研　Contact-Form 7 で送信するときに、カスタムサンクスページに飛ぶ
document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = '/received/';
  }, false );


// NeWork　サーバーにあるJSONファイルをロード
function fetchNews(cat) {
    fetch('/json/info.json')
        .then(response => response.json())
        .then(data => {
            let news = data["info"];
            let newsArray = [];
            news.forEach((i) => {
                if (cat === 'all' || cat === i.category)
                newsArray.push(i);
            });
            buildNews(newsArray);
        });
}



