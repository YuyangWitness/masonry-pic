const Router = require('koa-router');
const assert = require('./asserts.js');

const router = new Router();

router.get('/api/v1/plan', async (ctx, next) => {
  const designFiles = await assert.getDesignFlie() || [];
  const files = designFiles.map( file => {
    return `/asserts/plan/${file}`;
  })
  ctx.response.body = files;
});

router.get('/api/v1/media', async (ctx, next) => {
  const designFiles = await assert.getMediaFlie() || [];
  const files = designFiles.map( file => {
    return `/asserts/media/${file}`;
  })
  ctx.response.body = files;
});

router.get('/api/v1/video', async (ctx, next) => {
  const designFiles = await assert.getVideoFlie() || [];
  const files = designFiles.map( file => {
    return `/asserts/video/${file}`;
  })
  ctx.response.body = files;
});

module.exports = router;