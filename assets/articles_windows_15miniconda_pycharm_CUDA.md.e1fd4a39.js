import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.2516552c.js";const e="/assets/image-20230527163306660.0d9c110d.png",l="/assets/c9a813978b5846618070aabab8f2c52f.735a6a0b.png",o="/assets/image-20230527204543814.0f5d3259.png",c="/assets/image-20230527210509003.0b13d369.png",t="/assets/image-20230527223151987.e3f77b4d.png",i="/assets/image-20230527211659518.5e490fbd.png",r="/assets/image-20230527212341055.6c19c54e.png",d="/assets/image-20230527212414046.6af2f409.png",h="/assets/v2-0ff08577222cb6e09a85994544c175ff_r.18d8d5cb.jpg",_=JSON.parse('{"title":"Conda安装","description":"","frontmatter":{},"headers":[],"relativePath":"articles/windows/15miniconda+pycharm+CUDA.md","filePath":"articles/windows/15miniconda+pycharm+CUDA.md","lastUpdated":1698149129000}'),y={name:"articles/windows/15miniconda+pycharm+CUDA.md"},u=p(`<h1 id="conda安装" tabindex="-1">Conda安装 <a class="header-anchor" href="#conda安装" aria-label="Permalink to &quot;Conda安装&quot;">​</a></h1><h2 id="win10安装" tabindex="-1">win10安装 <a class="header-anchor" href="#win10安装" aria-label="Permalink to &quot;win10安装&quot;">​</a></h2><p>1、从官网下载python版本对应的miniconda；</p><p>2、一直Next；不用配置环境变量；修改安装路径，因为后面创建的虚拟环境是放在安装目录；</p><p>3、安装后，打开Anaconda Prompt即可使用；</p><p>4、配置镜像（国内下载太慢，还容易卡住）</p><p>Windows 用户无法直接创建名为 <code>.condarc</code> 的文件，可先生成该文件之后再修改。生成文件位置在<code>C:\\Users\\username</code>下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">conda</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show_channel_urls</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">conda</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show_channel_urls</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yes</span></span></code></pre></div><p>修改文件内容如下</p><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">略，我的conda自动清华源</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">略，我的conda自动清华源</span></span></code></pre></div><p>配置完成可运行 <code>conda clean -i</code> 清除索引缓存。</p><h2 id="linux安装" tabindex="-1">Linux安装 <a class="header-anchor" href="#linux安装" aria-label="Permalink to &quot;Linux安装&quot;">​</a></h2><p>1、从官网下载<code>Miniconda3-py310_23.3.1-0-Linux-x86_64.sh</code></p><p>2、进入下载路径，执行安装<code>bash Miniconda3-py310_23.3.1-0-Linux-x86_64.sh</code></p><p>3、按提示，一直输入<code>yes</code>或回车</p><p>4、进入用户home下<code>/home/xxx/</code>， 刷新环境变量<code>source ～/.bashrc</code></p><p>5、conda默认激活了base环境，但是我们用不到，需要设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda deactivate</span></span>
<span class="line"><span style="color:#e1e4e8;">conda config --set auto_activate_base false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda deactivate</span></span>
<span class="line"><span style="color:#24292e;">conda config --set auto_activate_base false</span></span></code></pre></div><p>6、我的下载速度还可以，就没有更改镜像</p><p>7、卸载：<code>rm -rf /home/xxx/miniconda3</code></p><h2 id="linux下多用户共享" tabindex="-1">Linux下多用户共享 <a class="header-anchor" href="#linux下多用户共享" aria-label="Permalink to &quot;Linux下多用户共享&quot;">​</a></h2><p>1、配置命令路径</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/profile</span></span>
<span class="line"><span style="color:#6A737D;"># 在末尾添加 </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> PATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/home/xxx/anaconda/bin&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/profile</span><span style="color:#E1E4E8;"> 		 </span><span style="color:#6A737D;"># 刷新，此外～/.bashrc中的路径配置可以删了</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/profile</span></span>
<span class="line"><span style="color:#6A737D;"># 在末尾添加 </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> PATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/home/xxx/anaconda/bin&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/profile</span><span style="color:#24292E;"> 		 </span><span style="color:#6A737D;"># 刷新，此外～/.bashrc中的路径配置可以删了</span></span></code></pre></div><p>2、创建用户</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#创建用户 -m创建home目录 -g可以指定用户组</span></span>
<span class="line"><span style="color:#B392F0;">useradd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">useradd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anaconda</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span>
<span class="line"><span style="color:#6A737D;"># 设置密码</span></span>
<span class="line"><span style="color:#B392F0;">passwd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#创建用户 -m创建home目录 -g可以指定用户组</span></span>
<span class="line"><span style="color:#6F42C1;">useradd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">useradd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anaconda</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span>
<span class="line"><span style="color:#6A737D;"># 设置密码</span></span>
<span class="line"><span style="color:#6F42C1;">passwd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>3、创建anaconda组</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">groupadd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anaconda</span><span style="color:#E1E4E8;">  						</span><span style="color:#6A737D;"># 创建anaconda组</span></span>
<span class="line"><span style="color:#B392F0;">chgrp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anaconda</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/xxx/anaconda</span><span style="color:#E1E4E8;"> 	</span><span style="color:#6A737D;"># 组内共享 anaconda安装目录</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">770</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/xxx/anaconda</span><span style="color:#E1E4E8;"> 		</span><span style="color:#6A737D;"># 修改目录操作权限</span></span>
<span class="line"><span style="color:#B392F0;">usermod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-G</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anaconda</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">username</span><span style="color:#E1E4E8;">	 		</span><span style="color:#6A737D;"># 添加用户进组</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">groupadd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anaconda</span><span style="color:#24292E;">  						</span><span style="color:#6A737D;"># 创建anaconda组</span></span>
<span class="line"><span style="color:#6F42C1;">chgrp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anaconda</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/xxx/anaconda</span><span style="color:#24292E;"> 	</span><span style="color:#6A737D;"># 组内共享 anaconda安装目录</span></span>
<span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">770</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/xxx/anaconda</span><span style="color:#24292E;"> 		</span><span style="color:#6A737D;"># 修改目录操作权限</span></span>
<span class="line"><span style="color:#6F42C1;">usermod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-G</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anaconda</span><span style="color:#24292E;"> </span><span style="color:#032F62;">username</span><span style="color:#24292E;">	 		</span><span style="color:#6A737D;"># 添加用户进组</span></span></code></pre></div><h1 id="conda更换源" tabindex="-1">Conda更换源 <a class="header-anchor" href="#conda更换源" aria-label="Permalink to &quot;Conda更换源&quot;">​</a></h1><p>如果下载慢，再来更换！</p><p>恢复默认</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda config --remove-key channels</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda config --remove-key channels</span></span></code></pre></div><p>源最终存在<code>.condarc</code> 的文件中，需要生成该文件之后再修改，生成文件位置在<code>C:\\Users\\username</code>下。命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda config --set show_channel_urls yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda config --set show_channel_urls yes</span></span></code></pre></div><p>但是一般建议直接修改源文件，可以用以下命令：</p><p>换清华源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</span></span>
<span class="line"><span style="color:#e1e4e8;">conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/</span></span>
<span class="line"><span style="color:#e1e4e8;">conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/fastai/</span></span>
<span class="line"><span style="color:#e1e4e8;">conda config --set show_channel_urls yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</span></span>
<span class="line"><span style="color:#24292e;">conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/</span></span>
<span class="line"><span style="color:#24292e;">conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/fastai/</span></span>
<span class="line"><span style="color:#24292e;">conda config --set show_channel_urls yes</span></span></code></pre></div><p>配置完成可运行 <code>conda clean -i</code> 清除索引缓存。</p><p>查看源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda config --show channels</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda config --show channels</span></span></code></pre></div><h1 id="conda命令" tabindex="-1">Conda命令 <a class="header-anchor" href="#conda命令" aria-label="Permalink to &quot;Conda命令&quot;">​</a></h1><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>管理版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看conda版本</span></span>
<span class="line"><span style="color:#e1e4e8;">conda --version</span></span>
<span class="line"><span style="color:#e1e4e8;">python --version</span></span>
<span class="line"><span style="color:#e1e4e8;"># 更新conda</span></span>
<span class="line"><span style="color:#e1e4e8;">conda update conda</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看conda版本</span></span>
<span class="line"><span style="color:#24292e;">conda --version</span></span>
<span class="line"><span style="color:#24292e;">python --version</span></span>
<span class="line"><span style="color:#24292e;"># 更新conda</span></span>
<span class="line"><span style="color:#24292e;">conda update conda</span></span></code></pre></div><p>管理虚拟环境</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看已有环境</span></span>
<span class="line"><span style="color:#e1e4e8;">conda env list</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建虚拟环境 （在安装目录下的/envs下）</span></span>
<span class="line"><span style="color:#e1e4e8;">conda create -n xxx python=x.x</span></span>
<span class="line"><span style="color:#e1e4e8;"># 激活虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">activate xxx</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">deactivate xxx</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">conda remove -n xxx --all</span></span>
<span class="line"><span style="color:#e1e4e8;"># 复制虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">conda create --name new_env_name --clone old_env_name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看已有环境</span></span>
<span class="line"><span style="color:#24292e;">conda env list</span></span>
<span class="line"><span style="color:#24292e;"># 创建虚拟环境 （在安装目录下的/envs下）</span></span>
<span class="line"><span style="color:#24292e;">conda create -n xxx python=x.x</span></span>
<span class="line"><span style="color:#24292e;"># 激活虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">activate xxx</span></span>
<span class="line"><span style="color:#24292e;"># 退出虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">deactivate xxx</span></span>
<span class="line"><span style="color:#24292e;"># 删除虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">conda remove -n xxx --all</span></span>
<span class="line"><span style="color:#24292e;"># 复制虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">conda create --name new_env_name --clone old_env_name</span></span></code></pre></div><p>管理包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装包</span></span>
<span class="line"><span style="color:#e1e4e8;">conda install numpy==x.x.x</span></span>
<span class="line"><span style="color:#e1e4e8;">pip install numpy==x.x.x</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除包</span></span>
<span class="line"><span style="color:#e1e4e8;">conda remove numpy</span></span>
<span class="line"><span style="color:#e1e4e8;">pip remove numpy</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看包</span></span>
<span class="line"><span style="color:#e1e4e8;">conda list</span></span>
<span class="line"><span style="color:#e1e4e8;">pip list</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装到指定环境中</span></span>
<span class="line"><span style="color:#e1e4e8;">conda install --name env_name package_name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装包</span></span>
<span class="line"><span style="color:#24292e;">conda install numpy==x.x.x</span></span>
<span class="line"><span style="color:#24292e;">pip install numpy==x.x.x</span></span>
<span class="line"><span style="color:#24292e;"># 删除包</span></span>
<span class="line"><span style="color:#24292e;">conda remove numpy</span></span>
<span class="line"><span style="color:#24292e;">pip remove numpy</span></span>
<span class="line"><span style="color:#24292e;"># 查看包</span></span>
<span class="line"><span style="color:#24292e;">conda list</span></span>
<span class="line"><span style="color:#24292e;">pip list</span></span>
<span class="line"><span style="color:#24292e;"># 安装到指定环境中</span></span>
<span class="line"><span style="color:#24292e;">conda install --name env_name package_name</span></span></code></pre></div><h2 id="用conda-用pip" tabindex="-1">用conda？用pip？ <a class="header-anchor" href="#用conda-用pip" aria-label="Permalink to &quot;用conda？用pip？&quot;">​</a></h2><p><strong>先说结论</strong>：</p><ul><li>能用conda用conda，不行再用pip</li><li>pip用前查看pip路径：<code>pip show pip</code>或<code>pip -V</code></li><li>一定要解决全局pip问题（看下文）</li></ul><p><strong>两者区别</strong>：</p><p>环境：win10 + miniconda3 (python3.10)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 虚拟环境下使用conda install：安装的库会放在\\miniconda\\pkgs目录下。虚拟环境\\miniconda\\envs\\py37\\Lib\\site-packages这里应该只是个链接，而不是重复下载的。这样即可以隔离环境，也可以节省空间。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2. 虚拟环境下使用pip install:</span></span>
<span class="line"><span style="color:#e1e4e8;">2.1 如果使用系统全局的python，安装库会放在\\miniconda\\Lib\\site-packages</span></span>
<span class="line"><span style="color:#e1e4e8;">2.2 如果使用虚拟环境的python，安装库会放在\\miniconda\\envs\\py36\\Lib\\site-packages</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3. 如果判断pip命令用的哪个环境的？</span></span>
<span class="line"><span style="color:#e1e4e8;">pip -V 或者 pip show pip</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; D:\\Program\\miniconda\\Lib\\site-packages </span></span>
<span class="line"><span style="color:#e1e4e8;">不是虚拟环境路径，说明用的是系统的pip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 虚拟环境下使用conda install：安装的库会放在\\miniconda\\pkgs目录下。虚拟环境\\miniconda\\envs\\py37\\Lib\\site-packages这里应该只是个链接，而不是重复下载的。这样即可以隔离环境，也可以节省空间。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2. 虚拟环境下使用pip install:</span></span>
<span class="line"><span style="color:#24292e;">2.1 如果使用系统全局的python，安装库会放在\\miniconda\\Lib\\site-packages</span></span>
<span class="line"><span style="color:#24292e;">2.2 如果使用虚拟环境的python，安装库会放在\\miniconda\\envs\\py36\\Lib\\site-packages</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3. 如果判断pip命令用的哪个环境的？</span></span>
<span class="line"><span style="color:#24292e;">pip -V 或者 pip show pip</span></span>
<span class="line"><span style="color:#24292e;">&gt; D:\\Program\\miniconda\\Lib\\site-packages </span></span>
<span class="line"><span style="color:#24292e;">不是虚拟环境路径，说明用的是系统的pip</span></span></code></pre></div><h2 id="解决全局pip" tabindex="-1">解决全局pip！ <a class="header-anchor" href="#解决全局pip" aria-label="Permalink to &quot;解决全局pip！&quot;">​</a></h2><p>即使在虚拟环境下，也是用全局pip，这是不对的。</p><p>判断当前pip是哪个pip？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip show pip </span></span>
<span class="line"><span style="color:#e1e4e8;">pip -V</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip show pip </span></span>
<span class="line"><span style="color:#24292e;">pip -V</span></span></code></pre></div><p>方式一：临时解决——用python命令（我最开始python不管用，重启后解决）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda activate env_name</span></span>
<span class="line"><span style="color:#e1e4e8;">python -m pip install xxx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda activate env_name</span></span>
<span class="line"><span style="color:#24292e;">python -m pip install xxx</span></span></code></pre></div><p>方式二：该虚拟环境下永久解决——更新pip</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda activate env_name</span></span>
<span class="line"><span style="color:#e1e4e8;">python -m pip install --upgrade pip</span></span>
<span class="line"><span style="color:#e1e4e8;">pip -V</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda activate env_name</span></span>
<span class="line"><span style="color:#24292e;">python -m pip install --upgrade pip</span></span>
<span class="line"><span style="color:#24292e;">pip -V</span></span></code></pre></div><h1 id="pycharm安装" tabindex="-1">PyCharm安装 <a class="header-anchor" href="#pycharm安装" aria-label="Permalink to &quot;PyCharm安装&quot;">​</a></h1><p>1、安装，略</p><p>2、打开一个文件/项目</p><p>3、直接运行，发现pycharm找到了conda的base的环境</p><p>4、还可以配置虚拟环境 Settings -&gt; Python Interpreter</p><p><img src="`+e+'" alt="image-20230527163306660"></p><h1 id="pytroch安装" tabindex="-1">PyTroch安装 <a class="header-anchor" href="#pytroch安装" aria-label="Permalink to &quot;PyTroch安装&quot;">​</a></h1><h2 id="什么是cuda" tabindex="-1">什么是CUDA <a class="header-anchor" href="#什么是cuda" aria-label="Permalink to &quot;什么是CUDA&quot;">​</a></h2><p><strong>统一计算设备架构</strong>(Compute Unified Device Architecture,CUDA)，由 NVIDIA 推出的并行计算平台和编程模型。 它通过利用图形处理单元 (GPU) 的强大功能来显着提高计算性能。</p><p>Nvidia安装的cuda是一个完整的cuda库，包含cuda toolkit和相应的驱动。主要包含三部分：CUDA toolkit、CUDA driver和NVIDIA GPU driver。windows电脑安装会自动安装GPU驱动，所以只需要安装CUDA toolkit就可以保证CUDA相关的程序运行。</p><p>个人理解：</p><ul><li>NVIDIA驱动版本 决定 CUDA Toolkit版本</li><li>CUDA Toolkit版本 影响 PyTorch版本</li></ul><p><img src="'+l+'" alt="在这里插入图片描述"></p><h2 id="更新驱动" tabindex="-1">更新驱动 <a class="header-anchor" href="#更新驱动" aria-label="Permalink to &quot;更新驱动&quot;">​</a></h2><p>win+r输入<code>nvidia-smi</code>查看驱动对应的CUDA版本：</p><ul><li>驱动是456.71</li><li>CUDA版本是11.1 （但是这个并不是）</li></ul><p><img src="'+o+'" alt="image-20230527204543814"></p><p>直接下载驱动<a href="https://www.nvidia.cn/Download/index.aspx?lang=cn" target="_blank" rel="noreferrer">官方驱动 | NVIDIA</a></p><p>或者，下载NVIDIA GeForce Experience来快速升级驱动。</p><p><img src="'+c+'" alt="image-20230527210509003"></p><p>更新驱动，再次查看，发现支持CUDA 12.1了！！</p><p><img src="'+t+'" alt="image-20230527223151987"></p><h2 id="安装pytorch" tabindex="-1">安装PyTorch <a class="header-anchor" href="#安装pytorch" aria-label="Permalink to &quot;安装PyTorch&quot;">​</a></h2><p>开始安装pytorch，去官网下载，找以前的版本，最新的没下载下来。</p><p><img src="'+i+`" alt="image-20230527211659518"></p><p>复制命令，去conda下载。</p><ul><li>conda下载不下来，用pip安装好了</li><li>如果pip用的是虚拟环境的，conda list也能把下载的文件展示出来。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda activate py310</span></span>
<span class="line"><span style="color:#e1e4e8;">conda install pytorch==2.0.0 torchvision==0.15.0 torchaudio==2.0.0 pytorch-cuda=11.7 -c pytorch -c nvidia</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">pip -V  # 查看用的是哪个pip</span></span>
<span class="line"><span style="color:#e1e4e8;">pip install torch==2.0.0+cu117 torchvision==0.15.1+cu117 torchaudio==2.0.1 --index-url https://download.pytorch.org/whl/cu117</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda activate py310</span></span>
<span class="line"><span style="color:#24292e;">conda install pytorch==2.0.0 torchvision==0.15.0 torchaudio==2.0.0 pytorch-cuda=11.7 -c pytorch -c nvidia</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">pip -V  # 查看用的是哪个pip</span></span>
<span class="line"><span style="color:#24292e;">pip install torch==2.0.0+cu117 torchvision==0.15.1+cu117 torchaudio==2.0.1 --index-url https://download.pytorch.org/whl/cu117</span></span></code></pre></div><p>验证</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">conda activate py310</span></span>
<span class="line"><span style="color:#e1e4e8;">python</span></span>
<span class="line"><span style="color:#e1e4e8;">import torch</span></span>
<span class="line"><span style="color:#e1e4e8;">torch.cuda.is_available()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">conda activate py310</span></span>
<span class="line"><span style="color:#24292e;">python</span></span>
<span class="line"><span style="color:#24292e;">import torch</span></span>
<span class="line"><span style="color:#24292e;">torch.cuda.is_available()</span></span></code></pre></div><h1 id="cuda思考" tabindex="-1">CUDA思考 <a class="header-anchor" href="#cuda思考" aria-label="Permalink to &quot;CUDA思考&quot;">​</a></h1><h2 id="pytorch为什么不用安装cuda" tabindex="-1">PyTorch为什么不用安装CUDA <a class="header-anchor" href="#pytorch为什么不用安装cuda" aria-label="Permalink to &quot;PyTorch为什么不用安装CUDA&quot;">​</a></h2><p>官网安装pytorch的两个命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># conda</span></span>
<span class="line"><span style="color:#e1e4e8;">conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># pip</span></span>
<span class="line"><span style="color:#e1e4e8;">pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># conda</span></span>
<span class="line"><span style="color:#24292e;">conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># pip</span></span>
<span class="line"><span style="color:#24292e;">pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118</span></span></code></pre></div><p>如果是conda安装，指定了<code>pytorch-cuda=11.8</code>，程序用的是自己的CUDA，而不会去用我们电脑安装的。</p><p>如果是pip安装，指定了<code>--index-url https://download.pytorch.org/whl/cu118</code>，也下载了CUDA，所以也不会去用我们电脑安装的。</p><p>注意：这里的CUDA只给pytorch用！！（待验证）</p><h2 id="cuda的两个版本" tabindex="-1">CUDA的两个版本 <a class="header-anchor" href="#cuda的两个版本" aria-label="Permalink to &quot;CUDA的两个版本&quot;">​</a></h2><p>CUDA有两个主要的API，<code>runtime API</code> 和 <code>driver API</code>。两者都有相应的版本：</p><ol><li>用于支持driver API的必要文件（如<code>libcuda.so</code>）是由GPU driver installer安装的。<code>nvidia-smi</code> 就属于这一类API</li><li>用于支持runtime API的必要文件（如<code>libcudart.so</code>以及<code>nvcc</code>）是由CUDA Toolkit installer安装的</li></ol><p>所以，两个cuda版本不一样，是因为不是同一个程序安装的：</p><ul><li>windows默认安装了显卡驱动，win+r输入<code>nvidia-smi</code>查看驱动对应的CUDA版本，是<code>driver API</code>版本;</li><li>假如我们安装了CUDA Tookit，进入bin目录输入<code>nvcc -V</code>查看的CUDA版本，是<code>runtime API</code>版本；</li></ul><p>版本不一致的解释：</p><ul><li>由于显卡驱动是向后兼容的，因此一般显卡驱动的版本都要高于或等于当前CUDA Toolkit 所对应的最低版本。</li><li>所以，安装PyTorch时，CUDA版本低没关系。</li></ul><h2 id="安装cuda" tabindex="-1">安装CUDA <a class="header-anchor" href="#安装cuda" aria-label="Permalink to &quot;安装CUDA&quot;">​</a></h2><p>虽然用不到了，但是讲下安装过程。</p><p>从<a href="https://developer.nvidia.com/cuda-downloads" target="_blank" rel="noreferrer">developer.nvidia.com/cuda-downloads</a>，下载CUDA Toolkit 12.1，有点大3个G！！</p><p>安装过程中，选择自定义安装</p><p><img src="`+r+'" alt="image-20230527212341055"></p><p>这里有一个组件，不需要，可以取消勾选</p><p><img src="'+d+'" alt="image-20230527212414046"></p><p>然后一直安装就可以了。</p><h1 id="监控" tabindex="-1">监控 <a class="header-anchor" href="#监控" aria-label="Permalink to &quot;监控&quot;">​</a></h1><h2 id="什么是利用率" tabindex="-1">什么是利用率？ <a class="header-anchor" href="#什么是利用率" aria-label="Permalink to &quot;什么是利用率？&quot;">​</a></h2><p>过去的一个采样周期内GPU 内核执行时间的百分比，就称作GPU的利用率。</p><p>如果这个值很低，则意味着您的 GPU 并没有全速的工作，可能是受到 CPU或者IO 操作的瓶颈，如果你使用的按小时付费的云服务器，那么就是在浪费时间和金钱！</p><h2 id="使用终端命令监控" tabindex="-1">使用终端命令监控 <a class="header-anchor" href="#使用终端命令监控" aria-label="Permalink to &quot;使用终端命令监控&quot;">​</a></h2><p>打开cmd命令窗口，输入</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nvidia-smi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nvidia-smi</span></span></code></pre></div><p><img src="'+h+'" alt="img"></p><p>以下是我们在这里收集的一些信息：</p><ul><li>GPU：Tesla T4</li><li>设备温度：设备当前运行温度为 25 摄氏度</li><li>功耗：GPU 目前运行功率9W，官方设定的额定最大功率消耗 70W 。</li><li>显存：0MiB / 15109MiB 上限</li><li>GPU利用率：0%。 同样，NVIDIA 将利用率定义如下： 过去采样周期中一个或多个内核在 GPU 上执行的时间百分比。</li></ul><p>如果你负责硬件相关的工作，温度和功率是跟踪的可能是你关注的主要问题，这样您就可以平衡尝试最大化计算和维护设备安全。</p><p>如果你是硬件使用者（就像一般我们使用云服务器一样），最关心的应该是内存使用和GPU利用率。</p><p>使用 nvidia-smi 进行监控的其他一些技巧：</p><ul><li>Linux: 调用 <code>watch -n 1 nvidia-smi</code> 可以每一秒进行自动的刷新</li><li>window：调用<code>nvidia-smi dmon</code>，自动刷新</li></ul><h2 id="使用nvitop" tabindex="-1">使用nvitop <a class="header-anchor" href="#使用nvitop" aria-label="Permalink to &quot;使用nvitop&quot;">​</a></h2><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install nvitop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install nvitop</span></span></code></pre></div><p>界面美观、实时刷新</p>',131),g=[u];function v(m,b,E,k,C,x){return a(),n("div",null,g)}const f=s(y,[["render",v]]);export{_ as __pageData,f as default};
