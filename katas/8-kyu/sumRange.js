function sumRange(from, to) {
  if (from > to) {
    return 0;
  }

  return ((to - from + 1) * (to + from)) / 2;
}

sumRange(5, 10);
