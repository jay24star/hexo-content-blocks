[en-US](../README.md) | zh-CN

# hexo-content-blocks

一个为 Hexo 设计的插件，可以使用带有样式的内容块，并且支持自定义哦。

（灵感来源于 [OI-Wiki](https://oi-wiki.org/)）

它支持可折叠的内容框，将来还会支持不可折叠的内容块。现在，你可以自定义指定类型的颜色和图标。当前，我们支持一种主题，以后可能会有更多的主题可供选择。

要用它的话，直接写一个 Hexo 标签就可以啦。

如下。（没错，这是一道板子题的代码，猜猜是哪道）

<details type="note">
  <summary>参考代码</summary>

  ```cpp
  #include <cstdio>

  const int pow[] = {1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323};

  int n, m;
  char a[15][15];
  long long f[15][1600000];

  int p[1600000], r[1600000], tot = 0;

  int ex = 0, ey = 0;

  int main()
  {
      scanf("%d%d", &n, &m);
      for (int i = 1; i <= n; ++i) for (int j = 1; j <= m; ++j)
      {
          scanf(" %c", &a[i][j]);
          if (a[i][j] == '.') ex = i, ey = j;
      }

      for (int i = 0; i < pow[m + 1]; ++i)
      {
          int cnt = 0;
          for (int j = 0; j <= m; ++j)
          {
              if (i / pow[j] % 3 == 1) ++cnt;
              else if (i / pow[j] % 3 == 2)
              {
                  --cnt;
                  if (cnt < 0) break;
              }
          }
          if (cnt == 0)
          {
              p[i] = tot;
              r[tot] = i;
              ++tot;
          }
          else p[i] = pow[m + 1];
      }

      f[m][0] = 1;
      for (int i = 1; i <= ex; ++i)
      {
          for (int k = 0; r[k] < pow[m]; ++k) f[0][p[r[k] * 3]] = f[m][k];
          for (int j = 1; j <= m; ++j)
          {
              for (int k = 0; k < tot; ++k)
              {
              #define s r[k]
                  int down = s / pow[j - 1] % 3, right = s / pow[j] % 3;
                  if (a[i][j] == '*')
                  {
                      if (down == 0 && right == 0) f[j][k] = f[j - 1][k];
                      else f[j][k] = 0;
                  }
                  else
                  {
                      if (down == 0 && right == 0)
                      {
                          f[j][k] = f[j - 1][p[s + 2 * pow[j - 1] + 1 * pow[j]]];
                          int cnt = 0;
                          for (int d = j + 1; d <= m && cnt >= 0; ++d)
                          {
                              if (s / pow[d] % 3 == 1)
                              {
                                  if (!cnt) f[j][k] += f[j - 1][p[s + 1 * pow[j - 1] + 1 * pow[j] + pow[d]]];
                                  ++cnt;
                              }
                              if (s / pow[d] % 3 == 2) --cnt;
                          }
                          cnt = 0;
                          for (int d = j - 2; d >= 0 && cnt >= 0; --d)
                          {
                              if (s / pow[d] % 3 == 2)
                              {
                                  if (!cnt) f[j][k] += f[j - 1][p[s + 2 * pow[j - 1] + 2 * pow[j] - pow[d]]];
                                  ++cnt;
                              }
                              if (s / pow[d] % 3 == 1) --cnt;
                          }
                      }
                      else if (down && right)
                      {
                          if (down == 1 && right == 2) f[j][k] = f[j - 1][p[s - 1 * pow[j - 1] - 2 * pow[j]]];
                          else f[j][k] = 0;
                      }
                      else f[j][k] = f[j - 1][k] + f[j - 1][p[s + (right - down) * pow[j - 1] + (down - right) * pow[j]]];
                  }
              #undef s
              }
          }
      }

      printf("%lld\n", f[ey - 1][p[1 * pow[ey - 1] + 2 * pow[ey]]]);

      return 0;
  }
  ```

</details>

<style>details.note,details.success,details.failure,details.warning,details.info,details.question{display:block!important;padding-top:0!important;box-shadow:0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2)!important;position:relative!important;margin:1.5625em 0!important;padding:0 1em!important;border-left:.2em solid!important;border-radius:.1em!important;font-size:.9em!important;overflow:auto!important;}details.note:not([open]),details.success:not([open]),details.failure:not([open]),details.warning:not([open]),details.info:not([open]),details.question:not([open]){padding-bottom:0!important;}details.note{border-left-color:#448aff!important;}details.success{border-left-color:#00c853!important;}details.failure{border-left-color:#ff5252!important;}details.warning{border-left-color:#ff9100!important;}details.info{border-left-color:#00b8d4!important;}details.question{border-left-color:#64dd17!important;}details.note>summary,details.success>summary,details.failure>summary,details.warning>summary,details.info>summary,details.question>summary{margin:0 -1em 1em -1em;padding:.4em .6em .4em 3em;border-bottom:.05em solid;font-weight:700;display:block;outline:none;cursor:pointer;}details.note>summary{border-bottom-color:rgba(68, 138, 255, .1);background-color:rgba(68, 138, 255, .1);}details.success>summary{border-bottom-color:rgba(0, 200, 83, .1);background-color:rgba(0, 200, 83, .1);}details.failure>summary{border-bottom-color:rgba(255, 82, 82, .1);background-color:rgba(255, 82, 82, .1);}details.warning>summary{border-bottom-color:rgba(255, 145, 0, .1);background-color:rgba(255, 145, 0, .1);}details.info>summary{border-bottom-color:rgba(0, 184, 212, .1);background-color:rgba(0, 184, 212, .1);}details.question>summary{border-bottom-color:rgba(100, 221, 23, .1);background-color:rgba(100, 221, 23, .1);}details.note:not([open])>summary,details.success:not([open])>summary,details.failure:not([open])>summary,details.warning:not([open])>summary,details.info:not([open])>summary,details.question:not([open])>summary{border-bottom:0;margin-bottom:0;}details.note>summary:before,details.success>summary:before,details.failure>summary:before,details.warning>summary:before,details.info>summary:before,details.question>summary:before,details.note>summary:after,details.success>summary:after,details.failure>summary:after,details.warning>summary:after,details.info>summary:after,details.question>summary:after{font-family:"Font Awesome 6 Free";font-style:normal;}details.note>summary:before,details.success>summary:before,details.failure>summary:before,details.warning>summary:before,details.info>summary:before,details.question>summary:before{position:absolute;left:1.25em;}details.note>summary:before{color:#448aff;content:"\f304";}details.success>summary:before{color:#00c853;content:"\f00c";}details.failure>summary:before{color:#ff5252;content:"\f00d";}details.warning>summary:before{color:#ff9100;content:"\f071";}details.info>summary:before{color:#00b8d4;content:"\f05a";}details.question>summary:before{color:#64dd17;content:"\f059";}details.note>summary:after,details.success>summary:after,details.failure>summary:after,details.warning>summary:after,details.info>summary:after,details.question>summary:after{position:absolute;right:1.25em;color:rgba(0, 0, 0, .26);content:"\f078";}details.note[open]>summary:after,details.success[open]>summary:after,details.failure[open]>summary:after,details.warning[open]>summary:after,details.info[open]>summary:after,details.question[open]>summary:after{content:"\f077";}</style>

# 安装 & 预设

在工作目录下执行以下命令：

```sh
$ npm install hexo-content-blocks --save
```

在适用于所有页面的 `<head>` 标签的布局文件中（比方说 NexT 主题的  `themes/next/layout/_partials/head/head.njk`），加入下面几行：

```njk
{%- if config.content_blocks.enable %}
  <style>{{ content_blocks_css() }}</style>
{%- endif %}
```

在站点配置文件里，加入以下几行：

```yml
# Content blocks
content_blocks:
  enable: true
  types:
    note: 448aff || \f304
    success: 00c853 || \f00c
    failure: ff5252 || \f00d
    warning: ff9100 || \f071
    info: 00b8d4 || \f05a
    question: 64dd17 || \f059
```

我们预先准备了六种类型。（note, success, failure, warning, info, question）

# 移除 & 清理

在工作目录下执行以下命令：

```sh
$ npm uninstall hexo-content-blocks --save
```

删除你在配置文件中加入的代码。你可以在 [安装 & 预设](#安装--预设) 里找到它们。

# 用法

你只需要在 Markdown 文件中写一个 Hexo 标签，就像这样：

```
{% content_box type:Type title:Title [open] %}
```

将 `Type` 替换为你想要采用的类型，在预设 6 种或是你自定义的类型中选择。默认 `Note`。

将 `Title` 替换为在首部显示的标题文字。默认是类型名。

如果添加了一句 `open`，折叠框就会默认展开。否则默认折叠。

只要你想，你就可以自定义类型。就在站点配置文件里我们添加的代码那里，像这样：

```yml
typename: color || icon
```

typename 随便起一个好听点的名字。color 需要是十六进制 RGB 代码，比方说 `448aff`、`"#448aff"`。图标字体是 Font Awesome 6 Free，所以你需要在[Font Awesome](https://fontawesome.com/icons) 上面找到图标的 Unicode 编码，再把它写到 color 的位置。

# 关于作者

这个插件的作者是 Sukwants，成都市磨子桥职业技术高中的小蒟蒻，当然，森萌和西橙（啊玩小老虎的梗）的其他同学都非常巨。

今天是 2022 年 11 月 6 日，NOIP 2022 是 2022 年 11 月 26 日。我不清楚，在 NOIP 过后我被刷下来以后，将何去何从。我想要学得更好，但是我还在浪费时间编写这个插件。但我会珍惜这些劳动成果，因为这是人生中的一段记忆。

然而，是时候开始卷了，没有更多的时间来躺平了。只希望 NOIP 人品加加加加加。

结束了。
