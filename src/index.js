import Fre from 'fre'
import Cookies from 'js-cookie'
import './style.css'

class App extends Fre.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseUrl: 'https://www.chinko.cc',
      url: this.GetQueryString('url'),
      display: "display:none;",
      switchText: '开灯'
    }
  }

  GetQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }

  changeNight() {
    this.state.display = 'display:block;'
    this.state.switchText = '开灯' ? this.state.switchText = '关灯' : this.state.switchText = '开灯'
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
        <div className="player">
          <div className="iframe">
            <iframe src={"http://jx.du2.cc/?url=" + this.state.url}
                    frameBorder="0" height="100%" width="100%"></iframe>
          </div>
          <div style="display:none" className="no-login">
            <ul>
              <a href="http://admin.chinko.cc/login">登陆</a>
              <a href="http://admin.chinko.cc/register">注册</a>
            </ul>
          </div>
        </div>

        <footer>
          <p>
            © ACGzone player 2018
            Powered by <span className="title">Fre.js</span>
          </p>
        </footer>

        <div className="night" style={this.state.display}>
        </div>
      </div>
    )
  }
}

Fre.render(<App/>, document.body)