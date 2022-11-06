en-US | [zh-CN](./zh-CN/README.md)

# hexo-content-blocks

A plugin for Hexo, which allows someone to use content block with styles. Customization supported.

(Idea from [OI-Wiki](https://oi-wiki.org/))

It supports foldable content boxes and not-foldable content blocks (in the future). Now, it supports you to custom the color and the icon in a certain type. It will give you several themes to choose in the future.

You can easily use it by writting a Hexo tag.

Demo. (Sure. It's a code for a template problem. Guess which.)

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

# Install & Preset

Execute the following command in the working directory:

```sh
$ npm install hexo-content-blocks --save
```

In the universal layout file for `<head>` tags (For example, `themes/next/layout/_partials/head/head.njk` in theme NexT), simply add the following codes:

```njk
{%- if config.content_blocks.enable %}
  <style>{{ content_blocks_css() }}</style>
{%- endif %}
```

In the site config file, simple add the following codes:

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

We have prepared 6 types in advance. (note, success, failure, warning, info, question)

# Remove & Clear

Execute the following command in the working directory:

```sh
$ npm uninstall hexo-content-blocks --save
```

Delete the codes you have added into the files. You can find it in [Install & Preset](#install--preset).

# Usage

You can use it just by writing a tag in your Markdown file. Like this:

```
{% content_box type:Type title:Title [open] %}
```

Replace `Type` with the type you want to use, in the 6 preset types and your custom ones. It is `Note` by default.

Replace `Title` with the title word given on the head line. It is the type name by default.

If you add an `open`, it means the content box will be open by default. Otherwise, it will be folded by default.

You can custom type styles as long as you'd like to. Just add below the codes we added to site config file, like this:

```yml
typename: color || icon
```

Set typename as you like. The color needs to be hex RGB codes, like `448aff` or `"#448aff"`. The icon font is Font Awesome 6 Free, so you should look for the Unicode from [Font Awesome](https://fontawesome.com/icons).

# About Author

The author is Sukwants, just an OIer in Chengdu No.7 High School. Well, so weak. And others in Chengdu No.7 High School and Mianyang Dongchen High School is so powerful.

Today is Nov.6, 2022 and NOIP 2022 is on Nov.26, 2022. I don't know where should I go when I am kicked out after NOIP. I want to study better, but I'm wasting time designing such a plugin. I'll cherish the works, as a piece of memories in my life.

However, I have to go to study for OI now. There is no more time for me to waste. Just wish NOIP rp++.

That's all.
