# postcss-px2rpx
> Postcss plugin transform px to rpx for weapp.

## usage:
```css
body{
  color: #f00;
  width: 200PX;
  border: 10px;
  font-size: 12.34px;
  border: 10px solid #f00;
  border-left:12.33px solid #f00;
  border:1PX solid #f00;
}


/* => */
body{
  color: #f00;
  width: 200px;
  border: 20rpx;
  font-size: 24.68rpx;
  border: 20rpx solid #f00;
  border-left:24.66rpx solid #f00;
  border:1px solid #f00;
}

```
## options

| Name  | Default | Description   |
| ----- | ------- | ------------- |
| ratio | 2       | 10px -> 20rpx |

