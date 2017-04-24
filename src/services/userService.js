import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class UserService {

  checkLogin () {
    return xhr({ url: '/user' })
  }

  /**
   * @param  {Object} userData
   * @return {Promise}
   */
  login (userData) {
    return xhr({
      method: 'post',
      url: '/login',
      body: userData
    })
  }

  logout () {
    return xhr({ url: '/logout' })
  }

}

// 实例化后再导出 对外提供方法 获取数据交互后的结果 但是数据交互在xhr中实现 减少了耦合性
export default new UserService()
