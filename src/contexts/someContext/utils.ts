function getUpdatedCount(currentCount: number, value: number) {
  return currentCount + value < 0 ? 0 : currentCount + value
}

export { getUpdatedCount }
