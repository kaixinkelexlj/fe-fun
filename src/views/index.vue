<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    height: 30px;
    /*background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 10px;
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 24px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.header{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: white;
}
.user-info{
    float: right;
    margin-right: 40px;
    color: white;
}
.user-info a{ 
    color: white
}
.user-info a:hover{ 
    color: #3399ff
}
.header .menu{
    float: left;
    right: 100px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <template>
                    <Row>
                        <Col span="4"><div class="layout-logo"><span>Just For Fun</span></div></Col>
                        <Col span="12">
                            <Menu mode="horizontal" theme="dark" active-name="1" @on-select="menuSelect">
                                <div class="menu">
                                    <MenuItem name="1">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </MenuItem>
                                    <MenuItem name="2">
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </MenuItem>
                                    <MenuItem name="3">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </MenuItem>
                                    <MenuItem name="4">
                                        <Icon type="ios-paper"></Icon>
                                        Item 4
                                    </MenuItem>
                                </div>
                            </Menu>
                        </Col>
                        <Col span="6">
                            <div class="user-info"><span>{{userName}}</span>&nbsp;&nbsp;<a href="#">注销</a></div>
                        </Col>
                    </Row>
                </template>
            </Header>
            <Layout>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>

    import service from "../service.js"

    export default {
        data : function() {
            return {
                userName : "",
            }
        },
        methods:{
            menuSelect : function(menuName){
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'select==>' + menuName
                });
            }   
        },
        created: function(){
           let self = this;
           service.getUserInfo().then(reponse => {
                console.log(reponse)
                self.userName = reponse.data.name
           });    
        }
    }
</script>