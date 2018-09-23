import React, {Component,ReactDOM} from 'react';
import PropTypes from 'prop-types';
import template from './temp/template';
/*=============
 群主页
 ==============*/
class Index extends Component {
    constructor() {
        super();
        this.state = {
            "info":{
                "title":"",
                "name":"",
                "author":"",
                "license":"",
                "Github":""
            }
        }
    }
    render() {

        let {GetInitData} = this.props;
        let info = this.state.info;
        if(GetInitData.get('initData')!=undefined){
            info = GetInitData.get('initData').data.info;
            // redux 数据 传递测试
            console.log(info)
        }

        return (
            <div id='IndexComp'>
                <div className="comt">
                    <div className="clearfloat">
                        <div className="logo"></div>
                        <h2 className="title">2LIFE <br/> APP</h2>
                    </div>
                    <div className="git">
                        <span className="author">Author:</span>
                        <span className="author_name">{info.author}</span>
                        <span><a href={info.Github}>Github</a></span>
                    </div>
                </div>

            </div>
        )
    }
}
Index.propTypes = {
  GetInitData: PropTypes.object
};
export default template({
    id: 'index',
    url: '/getData',
    data: {},
    subscribeData: ['GetInitData'],
    component: Index
})
