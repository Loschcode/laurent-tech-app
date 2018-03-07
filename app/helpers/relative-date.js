import { helper } from '@ember/component/helper';

export default helper(function([date]) {
  /* eslint-disable no-undef */
  return moment(date).fromNow();
});
