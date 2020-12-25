<template>
  <div>
       <div class="nav-breadcrumb-wrap"> <!--css在440行 -->
        <div class="container">
          <nav class="nav-breadcrumb">
            <el-breadcrumb separator="/">
                 <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                 <slot></slot>
            </el-breadcrumb>
          </nav>
        </div>
      </div>
  </div>
</template>
