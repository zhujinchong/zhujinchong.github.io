import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.2516552c.js";const l="/assets/wps2.eba64bf2.jpg",p="/assets/wps3.3f36178e.jpg",o="/assets/wps4.41296ffb.jpg",c="/assets/wps5.ff231366.jpg",t="/assets/wps6-1691979421838.b0c75bc4.jpg",_=JSON.parse('{"title":"环境","description":"","frontmatter":{},"headers":[],"relativePath":"articles/windows/16欧拉系统安装GPU驱动.md","filePath":"articles/windows/16欧拉系统安装GPU驱动.md","lastUpdated":1698149129000}'),i={name:"articles/windows/16欧拉系统安装GPU驱动.md"},r=n(`<h1 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h1><p>环境</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">服务器：华为2288H V5</span></span>
<span class="line"><span style="color:#e1e4e8;">架构：x86</span></span>
<span class="line"><span style="color:#e1e4e8;">系统：OpenEuler 20.03 LTS</span></span>
<span class="line"><span style="color:#e1e4e8;">显卡：NVIDIA Tesla T4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">服务器：华为2288H V5</span></span>
<span class="line"><span style="color:#24292e;">架构：x86</span></span>
<span class="line"><span style="color:#24292e;">系统：OpenEuler 20.03 LTS</span></span>
<span class="line"><span style="color:#24292e;">显卡：NVIDIA Tesla T4</span></span></code></pre></div><p>不安装驱动，也可以查看显卡是否插好</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">lspci | grep -i nvidia</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">lspci | grep -i nvidia</span></span></code></pre></div><p>驱动、CUDA、cuDNN版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">驱动：向下兼容，所以驱动要保持最新</span></span>
<span class="line"><span style="color:#e1e4e8;">CUDA：先从PyTorch官网看下，支持哪些CUDA版本，目前是11.7 11.8，实际测试高版本CUDA也可以用</span></span>
<span class="line"><span style="color:#e1e4e8;">cuDNN：小于等于CUDA版本就好</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">驱动：向下兼容，所以驱动要保持最新</span></span>
<span class="line"><span style="color:#24292e;">CUDA：先从PyTorch官网看下，支持哪些CUDA版本，目前是11.7 11.8，实际测试高版本CUDA也可以用</span></span>
<span class="line"><span style="color:#24292e;">cuDNN：小于等于CUDA版本就好</span></span></code></pre></div><p>安装依赖包：</p><ul><li>安装Nvidia驱动所需要的依赖包为kernel-devel、gcc、dkms。</li><li>验证CUDA，编译并运行验证Sample代码所需要的依赖包为gcc-c++。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yum install kernel-devel kernel-headers gcc dkms gcc-c++</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yum install kernel-devel kernel-headers gcc dkms gcc-c++</span></span></code></pre></div><p><strong>问题：</strong> NVIDIA Tesla T4温度太高&gt;80度，导致服务器不断重启。</p><p>解决1：换高功率电源，没有解决。</p><p>解决2：按DEL进入BIOS，设置风扇转速最大&quot;Enforce Fan Speed&quot;，已解决。</p><h1 id="安装驱动" tabindex="-1">安装驱动 <a class="header-anchor" href="#安装驱动" aria-label="Permalink to &quot;安装驱动&quot;">​</a></h1><h2 id="禁用nouveau" tabindex="-1">禁用nouveau <a class="header-anchor" href="#禁用nouveau" aria-label="Permalink to &quot;禁用nouveau&quot;">​</a></h2><p>Nouveau是由第三方为NVIDIA显卡开发的一个开源3D驱动，也没能得到NVIDIA的认可与支持，所以对于显卡的调用来说，是不如现在官方提供的驱动来的效果好的。</p><p>查看系统自带的驱动：如果没有则直接跳过这一步。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">lsmod | grep nouveau</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">lsmod | grep nouveau</span></span></code></pre></div><p>禁用自带的显卡驱动（其他系统路径可能不一样）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vi /etc/modprobe.d/blacklist-nouveau.conf</span></span>
<span class="line"><span style="color:#e1e4e8;">#文件最后添加以下内容</span></span>
<span class="line"><span style="color:#e1e4e8;">blacklist nouveau</span></span>
<span class="line"><span style="color:#e1e4e8;">options nouveau modeset=0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># nvidia不要加入黑名单（如果文件中有）</span></span>
<span class="line"><span style="color:#e1e4e8;"># blacklist nvidiafb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vi /etc/modprobe.d/blacklist-nouveau.conf</span></span>
<span class="line"><span style="color:#24292e;">#文件最后添加以下内容</span></span>
<span class="line"><span style="color:#24292e;">blacklist nouveau</span></span>
<span class="line"><span style="color:#24292e;">options nouveau modeset=0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># nvidia不要加入黑名单（如果文件中有）</span></span>
<span class="line"><span style="color:#24292e;"># blacklist nvidiafb</span></span></code></pre></div><p>重建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mv /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r).img.bak</span></span>
<span class="line"><span style="color:#e1e4e8;">dracut /boot/initramfs-$(uname -r).img $(uname -r)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mv /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r).img.bak</span></span>
<span class="line"><span style="color:#24292e;">dracut /boot/initramfs-$(uname -r).img $(uname -r)</span></span></code></pre></div><p>重启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">reboot</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">reboot</span></span></code></pre></div><p>检查是否关闭</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">lsmod | grep nouveau</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">lsmod | grep nouveau</span></span></code></pre></div><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p><a href="https://www.nvidia.cn/Download/index.aspx?lang=cn" target="_blank" rel="noreferrer">https://www.nvidia.cn/Download/index.aspx?lang=cn</a></p><p><img src="`+l+`" alt="img"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">./NVIDIA-Linux-x86_64-515.57.run --kernel-source-path=/usr/src/kernels/5.10.0-60.41.0.70.oe2203.x86_64/ -k $(uname -r) --no-x-check</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">./NVIDIA-Linux-x86_64-515.57.run --kernel-source-path=/usr/src/kernels/5.10.0-60.41.0.70.oe2203.x86_64/ -k $(uname -r) --no-x-check</span></span></code></pre></div><p>安装过程选项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Would you like to register the kernel module sources with DKMS?选yes(服务器选yes，本地选no)</span></span>
<span class="line"><span style="color:#e1e4e8;">Install NVIDIA&#39;s 32-bit compatibility libraries?选no</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Would you like to register the kernel module sources with DKMS?选yes(服务器选yes，本地选no)</span></span>
<span class="line"><span style="color:#24292e;">Install NVIDIA&#39;s 32-bit compatibility libraries?选no</span></span></code></pre></div><p><strong>报错：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">gzip: stdin: invalid compressed data--format violated Extraction failed. Ensure there is enough space in /tmp and that the installation package is not corrupt Signal caught, cleaning up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">gzip: stdin: invalid compressed data--format violated Extraction failed. Ensure there is enough space in /tmp and that the installation package is not corrupt Signal caught, cleaning up</span></span></code></pre></div><p>解决方法1：内存不够用（不管用）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mkdir /home/tmp2</span></span>
<span class="line"><span style="color:#e1e4e8;">export TMPDIR=/home/tmp2</span></span>
<span class="line"><span style="color:#e1e4e8;">Sh ./NVIDIA-Linux-x86_64-515.57.run ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mkdir /home/tmp2</span></span>
<span class="line"><span style="color:#24292e;">export TMPDIR=/home/tmp2</span></span>
<span class="line"><span style="color:#24292e;">Sh ./NVIDIA-Linux-x86_64-515.57.run ...</span></span></code></pre></div><p>解决方法2：文件传输过程中损坏，重新下载驱动，安装成功！</p><p>最后，检测显卡成功</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nvidia-smi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nvidia-smi</span></span></code></pre></div><p><strong>报错：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">WARNING: You do not appear to have an NVIDIA GPU supported by the 430.34 NVIDIA ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">WARNING: You do not appear to have an NVIDIA GPU supported by the 430.34 NVIDIA ...</span></span></code></pre></div><p>加上：--add-this-kernel 参数</p><p><strong>报错：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">unable to find the kernel source tree for the currently running kernel.........</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">unable to find the kernel source tree for the currently running kernel.........</span></span></code></pre></div><p>加上：--kernel-source-path=/usr/src/kernels/内核号(2+Tab键 自动出现)</p><p><strong>报错：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">unable to load the kernel module &#39;nvidia.ko&#39; .........</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">unable to load the kernel module &#39;nvidia.ko&#39; .........</span></span></code></pre></div><p>执行：./NVIDIA-XXXX.run --kernel-source-path=/usr/src/kernels/内核号 -k $(uname -r)</p><p><strong>仍然报错：</strong> 实际系统内核和安装的kernel-devel与kernel-headers不一致导致</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ERROR: Unable to load the kernel module &#39;nvidia.ko&#39;.  This happens most frequently when this kernel module was built against the wrong or improperly configured kernel sources, with a version of gcc that differs from the one used to build the target kernel, or if another driver, such as nouveau, is present and prevents the NVIDIA kernel module from obtaining ownership of the NVIDIA GPU(s), or no NVIDIA GPU installed in this system is supported by this NVIDIA Linux graphics driver release.</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">ERROR: Unable to load the kernel module &#39;nvidia.ko&#39;.  This happens most frequently when this kernel module was built against the wrong or improperly configured kernel sources, with a version of gcc that differs from the one used to build the target kernel, or if another driver, such as nouveau, is present and prevents the NVIDIA kernel module from obtaining ownership of the NVIDIA GPU(s), or no NVIDIA GPU installed in this system is supported by this NVIDIA Linux graphics driver release.</span></span></code></pre></div><p>执行<code>yum install -y &quot;kernel-devel-uname-r == $(uname -r)&quot;</code></p><p>此时出现两个内核，选择和$(uname -r)一样的内核即可安装成功。</p><p><strong>报错：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> Failed to run \`/usr/sbin/dkms build -m nvidia -v 515.105.01 -k 4.19.90-2106.3.0.0095.oe1.x86_64\`: Error! echo</span></span>
<span class="line"><span style="color:#e1e4e8;">         Your kernel headers for kernel 4.19.90-2106.3.0.0095.oe1.x86_64 cannot be found at</span></span>
<span class="line"><span style="color:#e1e4e8;">         /lib/modules/4.19.90-2106.3.0.0095.oe1.x86_64/build or /lib/modules/4.19.90-2106.3.0.0095.oe1.x86_64/source.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> Failed to run \`/usr/sbin/dkms build -m nvidia -v 515.105.01 -k 4.19.90-2106.3.0.0095.oe1.x86_64\`: Error! echo</span></span>
<span class="line"><span style="color:#24292e;">         Your kernel headers for kernel 4.19.90-2106.3.0.0095.oe1.x86_64 cannot be found at</span></span>
<span class="line"><span style="color:#24292e;">         /lib/modules/4.19.90-2106.3.0.0095.oe1.x86_64/build or /lib/modules/4.19.90-2106.3.0.0095.oe1.x86_64/source.</span></span></code></pre></div><p>查内核版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rpm -qa | grep kernel</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rpm -qa | grep kernel</span></span></code></pre></div><p>发现 kernel 低于 kernel-headers kernel-devel版本不一致</p><p>然后yum install kernel 重启后解决。</p><h1 id="安装cuda" tabindex="-1">安装CUDA <a class="header-anchor" href="#安装cuda" aria-label="Permalink to &quot;安装CUDA&quot;">​</a></h1><h2 id="下载-1" tabindex="-1">下载 <a class="header-anchor" href="#下载-1" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p><a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noreferrer">https://developer.nvidia.com/cuda-toolkit-archive</a></p><p><img src="`+p+'" alt="img"></p><h2 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh cuda_11.2.0_460.27.04_linux.run</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh cuda_11.2.0_460.27.04_linux.run</span></span></code></pre></div><p>安装时选项，不用安装驱动</p><p><img src="'+o+`" alt="img"></p><p>添加环境变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vim ~/.bashrc</span></span>
<span class="line"><span style="color:#e1e4e8;">vim /etc/profile 都可以</span></span>
<span class="line"><span style="color:#e1e4e8;">export PATH=/usr/local/cuda-11.2/bin:$PATH</span></span>
<span class="line"><span style="color:#e1e4e8;">export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-11.2/lib64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vim ~/.bashrc</span></span>
<span class="line"><span style="color:#24292e;">vim /etc/profile 都可以</span></span>
<span class="line"><span style="color:#24292e;">export PATH=/usr/local/cuda-11.2/bin:$PATH</span></span>
<span class="line"><span style="color:#24292e;">export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-11.2/lib64</span></span></code></pre></div><p>刷新环境变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">source ~/.bashrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">source ~/.bashrc</span></span></code></pre></div><p>检测成功</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nvcc -V</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nvcc -V</span></span></code></pre></div><h1 id="安装cudnn" tabindex="-1">安装cuDNN <a class="header-anchor" href="#安装cudnn" aria-label="Permalink to &quot;安装cuDNN&quot;">​</a></h1><h2 id="下载-2" tabindex="-1">下载 <a class="header-anchor" href="#下载-2" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p><a href="https://developer.nvidia.cn/rdp/cudnn-archive" target="_blank" rel="noreferrer">https://developer.nvidia.cn/rdp/cudnn-archive</a></p><p><img src="`+c+`" alt="img"></p><h2 id="安装-2" tabindex="-1">安装 <a class="header-anchor" href="#安装-2" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>解压复制即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cp include/cudnn*.h /usr/local/cuda-11.2/include/ </span></span>
<span class="line"><span style="color:#e1e4e8;">cp lib/libcudnn* /usr/local/cuda-11.2/lib64/ </span></span>
<span class="line"><span style="color:#e1e4e8;">chmod a+r /usr/local/cuda-11.2/include/cudnn*.h </span></span>
<span class="line"><span style="color:#e1e4e8;">chmod a+r /usr/local/cuda-11.2/lib64/libcudnn*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cp include/cudnn*.h /usr/local/cuda-11.2/include/ </span></span>
<span class="line"><span style="color:#24292e;">cp lib/libcudnn* /usr/local/cuda-11.2/lib64/ </span></span>
<span class="line"><span style="color:#24292e;">chmod a+r /usr/local/cuda-11.2/include/cudnn*.h </span></span>
<span class="line"><span style="color:#24292e;">chmod a+r /usr/local/cuda-11.2/lib64/libcudnn*</span></span></code></pre></div><p>检查是否安装成功，略，可以去官网看：</p><p><a href="https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#verify" target="_blank" rel="noreferrer">https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#verify</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cp -r /usr/src/cudnn_samples_v8/ $HOME</span></span>
<span class="line"><span style="color:#e1e4e8;">$ cd  $HOME/cudnn_samples_v8/mnistCUDNN</span></span>
<span class="line"><span style="color:#e1e4e8;">$ make clean &amp;&amp; make</span></span>
<span class="line"><span style="color:#e1e4e8;">$ ./mnistCUDNN</span></span>
<span class="line"><span style="color:#e1e4e8;">Test passed!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cp -r /usr/src/cudnn_samples_v8/ $HOME</span></span>
<span class="line"><span style="color:#24292e;">$ cd  $HOME/cudnn_samples_v8/mnistCUDNN</span></span>
<span class="line"><span style="color:#24292e;">$ make clean &amp;&amp; make</span></span>
<span class="line"><span style="color:#24292e;">$ ./mnistCUDNN</span></span>
<span class="line"><span style="color:#24292e;">Test passed!</span></span></code></pre></div><h1 id="安装anaconda" tabindex="-1">安装Anaconda <a class="header-anchor" href="#安装anaconda" aria-label="Permalink to &quot;安装Anaconda&quot;">​</a></h1><h2 id="下载-3" tabindex="-1">下载 <a class="header-anchor" href="#下载-3" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>下载：<a href="https://www.anaconda.com/download" target="_blank" rel="noreferrer">https://www.anaconda.com/download</a></p><h2 id="安装-3" tabindex="-1">安装 <a class="header-anchor" href="#安装-3" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装：一直yes，安装过程中也可以设置安装路径</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">source ~/.bashrc</span></span>
<span class="line"><span style="color:#e1e4e8;">conda deactivate</span></span>
<span class="line"><span style="color:#e1e4e8;">conda config --set auto_activate_base false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">source ~/.bashrc</span></span>
<span class="line"><span style="color:#24292e;">conda deactivate</span></span>
<span class="line"><span style="color:#24292e;">conda config --set auto_activate_base false</span></span></code></pre></div><h1 id="安装pytorch" tabindex="-1">安装PyTorch <a class="header-anchor" href="#安装pytorch" aria-label="Permalink to &quot;安装PyTorch&quot;">​</a></h1><h2 id="离线包下载" tabindex="-1">离线包下载 <a class="header-anchor" href="#离线包下载" aria-label="Permalink to &quot;离线包下载&quot;">​</a></h2><p>pytorch 离线.whl包官方下载地址：<a href="https://download.pytorch.org/whl/torch_stable.html" target="_blank" rel="noreferrer">https://download.pytorch.org/whl/torch_stable.html</a></p><p><img src="`+t+`" alt="img"></p><h2 id="安装-4" tabindex="-1">安装 <a class="header-anchor" href="#安装-4" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install torch-1.2.0+cu92-cp36-cp36m-win_amd64.whl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install torch-1.2.0+cu92-cp36-cp36m-win_amd64.whl</span></span></code></pre></div><h1 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import torch</span></span>
<span class="line"><span style="color:#e1e4e8;">import time</span></span>
<span class="line"><span style="color:#e1e4e8;">from torch import autograd</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#GPU加速</span></span>
<span class="line"><span style="color:#e1e4e8;">print(torch.__version__)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(torch.cuda.is_available())</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">a=torch.randn(10000,1000)</span></span>
<span class="line"><span style="color:#e1e4e8;">b=torch.randn(1000,10000)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(b)</span></span>
<span class="line"><span style="color:#e1e4e8;">t0=time.time()</span></span>
<span class="line"><span style="color:#e1e4e8;">c=torch.matmul(a,b)</span></span>
<span class="line"><span style="color:#e1e4e8;">t1=time.time()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">print(a.device,t1-t0,c.norm(2))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">device=torch.device(&#39;cuda&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(device)</span></span>
<span class="line"><span style="color:#e1e4e8;">a=a.to(device)</span></span>
<span class="line"><span style="color:#e1e4e8;">b=b.to(device)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">t0=time.time()</span></span>
<span class="line"><span style="color:#e1e4e8;">c=torch.matmul(a,b)</span></span>
<span class="line"><span style="color:#e1e4e8;">t2=time.time()</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a.device,t2-t0,c.norm(2))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">t0=time.time()</span></span>
<span class="line"><span style="color:#e1e4e8;">c=torch.matmul(a,b)</span></span>
<span class="line"><span style="color:#e1e4e8;">t2=time.time()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">print(a.device,t2-t0,c.norm(2))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import torch</span></span>
<span class="line"><span style="color:#24292e;">import time</span></span>
<span class="line"><span style="color:#24292e;">from torch import autograd</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#GPU加速</span></span>
<span class="line"><span style="color:#24292e;">print(torch.__version__)</span></span>
<span class="line"><span style="color:#24292e;">print(torch.cuda.is_available())</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">a=torch.randn(10000,1000)</span></span>
<span class="line"><span style="color:#24292e;">b=torch.randn(1000,10000)</span></span>
<span class="line"><span style="color:#24292e;">print(a)</span></span>
<span class="line"><span style="color:#24292e;">print(b)</span></span>
<span class="line"><span style="color:#24292e;">t0=time.time()</span></span>
<span class="line"><span style="color:#24292e;">c=torch.matmul(a,b)</span></span>
<span class="line"><span style="color:#24292e;">t1=time.time()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">print(a.device,t1-t0,c.norm(2))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">device=torch.device(&#39;cuda&#39;)</span></span>
<span class="line"><span style="color:#24292e;">print(device)</span></span>
<span class="line"><span style="color:#24292e;">a=a.to(device)</span></span>
<span class="line"><span style="color:#24292e;">b=b.to(device)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">t0=time.time()</span></span>
<span class="line"><span style="color:#24292e;">c=torch.matmul(a,b)</span></span>
<span class="line"><span style="color:#24292e;">t2=time.time()</span></span>
<span class="line"><span style="color:#24292e;">print(a.device,t2-t0,c.norm(2))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">t0=time.time()</span></span>
<span class="line"><span style="color:#24292e;">c=torch.matmul(a,b)</span></span>
<span class="line"><span style="color:#24292e;">t2=time.time()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">print(a.device,t2-t0,c.norm(2))</span></span></code></pre></div>`,99),d=[r];function h(u,g,v,y,b,m){return a(),e("div",null,d)}const f=s(i,[["render",h]]);export{_ as __pageData,f as default};
