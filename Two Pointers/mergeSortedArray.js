function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // iterate from k to 0
  for (; k >= 0; k--) {
    if (j < 0) {
      // if nums2 array is exhausted, copy remaining elements from nums1
      nums1[k] = nums1[i];
      i--;
    } else if (i < 0) {
      // if nums1 array is exhausted, copy remaining elements from nums2
      nums1[k] = nums2[j];
      j--;
    } else if (nums1[i] > nums2[j]) {
      // if nums1[i] is larger, copy it to nums1[k] and decrement i
      nums1[k] = nums1[i];
      i--;
    } else {
      // otherwise, nums2[j] is larger, copy it to nums1[k] and decrement j
      nums1[k] = nums2[j];
      j--;
    }
  }

  return nums1;
}
