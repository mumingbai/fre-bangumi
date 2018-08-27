import Fre from 'fre'
import Cookies from 'js-cookie'
import './style.css'

class App extends Fre.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseUrl: 'https://www.chinko.cc',
      url: this.GetQueryString('url'),
      isShow: Cookies.get('uqq') ? 'display:block' : 'display:none'
    }
  }

  GetQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }

  render() {
    return (
      <div className="bangumi">
        <header>
          <div className="wrap">
            <a href={this.state.baseUrl}><span className="logo"><span className="title">ACG</span>zone player</span></a>
            <a href={this.state.baseUrl}>
              <li>主站</li>
            </a>
          </div>
        </header>
        <div className="player" >
          <div className="iframe" style={this.state.isShow}>
            <iframe src={"http://yun.baiyug.cn/vip/index.php?url=" + this.state.url}
                    frameBorder="0" height="450px" width="700px"></iframe>
          </div>
          <div style={!this.state.isShow} className="no-login">
            <ul>
              <a href="https://www.chinko.cc/login">登陆</a>
              <a href="https://www.chinko.cc/register">注册</a>
            </ul>
          </div>
        </div>

        <footer>
          <p>
            © ACGzone player 2018
            Powered by <span className="title">Fre.js</span>
          </p>
        </footer>
      </div>
    )
  }
}

Fre.render(<App/>, document.body)