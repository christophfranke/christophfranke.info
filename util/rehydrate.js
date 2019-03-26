import { StyleSheet } from 'aphrodite/no-important'

if (typeof window !== 'undefined') {
  StyleSheet.rehydrate(window.__NEXT_DATA__.ids)
}