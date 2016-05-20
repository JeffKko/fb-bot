# FB-bot x NodeJS
<p>讓Facebook機器人可以透過Messenger自動回話的小玩具</p>
<br>
<br>

<h4>1. 申請一個Facebook粉絲團 (目前只能透過粉絲團串接Bot API) </h4>

<h4>2. 到Facebook開發者後台建立一個應用程式，並啟用Messenger </h4>

<h4>3. 自己定義一組Token，寫入 facebookCallback.js</h4>

<h4>4. 取得https的三個.pem憑證 放入 ssl資料夾 (取代原本的)</h4>

<h4>5. npm start </h4>

<h4>6. 到FB開發者後台的Webhooks填入剛剛設定的Token，填入callback url，下面選項全勾</h4>

<h4>7. 連接粉絲專頁以取得Access Token，寫入 facebookCallback.js</h4>

<h4>8. npm start </h4>




<br>


# 敝人執行環境：

<p>Server : Synology NAS (DSM : 6.0) </p>
<p>NodeJS版本 : V4 </p>
<p>Secure憑證 : Let's Encrypt X3 </p>
<br>


#心得：

<p>相較於Line的開發者後台，Facebook的友善多了，說明的非常詳細</p>
<p>因為有Line Bot API 的經驗，FB的一下就寫完了 @_@</p>
<p>接下來就是發揮創意，去串接各種服務的時候拉~</p> 

<p>有任何問題歡迎連絡我 : b3589481400@gmail.com

