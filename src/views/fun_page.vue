<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button @click="handleStart">Start iView</Button>
                </h2>
            </Col>
            <Col>
                <Button>Default</Button>
                <Button type="primary" @click="buttonClick">Primary</Button>
                <Button type="dashed" @click="buttonClick">Dashed</Button>
                <Button type="text" @click="buttonClick">Text</Button>
                <br><br>
                <Button type="info" @click="buttonClick">Info</Button>
                <Button type="success" @click="buttonClick">Success</Button>
                <Button type="warning" @click="buttonClick">Warning</Button>
                <Button type="error" @click="buttonClick">Error</Button>
                <br><br>
                <ButtonGroup>
                    <Button icon="logo-facebook"></Button>
                    <Button icon="logo-twitter"></Button>
                    <Button icon="logo-googleplus"></Button>
                    <Button icon="logo-tumblr"></Button>
                </ButtonGroup>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            buttonClick (e){
                this.$Modal.info({
                    title: "ButtonClick",
                    content: e.target.textContent
                });
            }
        }
    }
</script>
