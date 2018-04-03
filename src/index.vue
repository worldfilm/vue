<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 750px;margin: 0 auto">
            <el-table-column
                    prop="head"
                    label="标题"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="num"
                    label="阅读次数"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="detail"
                    label="点评"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="内容"
                    width="150">
            </el-table-column>
        </el-table>
        <el-pagination
                @current-change="changeFenye"
                :current-page="currentPage"
                background
                layout="prev, pager, next"
                :total=50>
        </el-pagination>
    </div>
</template>

<script>
    import {shuJu} from '@/data/pagedatas.js'
    export default {
        data(){
            return {
                shuJu,
                currentPage:1,
                pageNums:shuJu.length,
                tableData: [{
                    head: shuJu[0].head,
                    time:  shuJu[0].time,
                    num:  shuJu[0].num,
                    detail:shuJu[0].detail,
                    content:shuJu[0].content[0]
                }, {
                    head: shuJu[1].head,
                    time:  shuJu[1].time,
                    num:  shuJu[1].num,
                    detail:shuJu[1].detail,
                    content:shuJu[1].content[0]
                }, {
                    head: shuJu[2].head,
                    time:  shuJu[2].time,
                    num:  shuJu[2].num,
                    detail:shuJu[2].detail,
                    content:shuJu[2].content[0]
                }, {
                    head: shuJu[3].head,
                    time:  shuJu[3].time,
                    num:  shuJu[3].num,
                    detail:shuJu[3].detail,
                    content:shuJu[3].content[0]
                }]
            }
        },
        methods:{
            changeFenye(val){
                console.log(val)
                 this.tableData=[{
                     head: shuJu[val*3+val-4].head,
                     time:  shuJu[val*3+val-4].time,
                     num:  shuJu[val*3+val-4].num,
                     detail:shuJu[val*3+val-4].detail,
                     content:shuJu[val*3+val-4].content[0]
                 }, {
                     head: shuJu[val*3+val-3].head,
                     time:  shuJu[val*3+val-3].time,
                     num:  shuJu[val*3+val-3].num,
                     detail:shuJu[val*3+val-3].detail,
                     content:shuJu[val*3+val-3].content[0]
                 }, {
                     head: shuJu[val*3+val-2].head,
                     time:  shuJu[val*3+val-2].time,
                     num:  shuJu[val*3+val-2].num,
                     detail:shuJu[val*3+val-2].detail,
                     content:shuJu[val*3+val-2].content[0]
                 }, {
                     head: shuJu[val*3+val-1].head,
                     time:  shuJu[val*3+val-1].time,
                     num:  shuJu[val*3+val-1].num,
                     detail:shuJu[val*3+val-1].detail,
                     content:shuJu[val*3+val-1].content[0]
                 }]
            }
        },
        mounted:function () {
            console.log(1111)
        }

    }
</script>

<style scoped>


</style>
