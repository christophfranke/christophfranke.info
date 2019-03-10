import { StyleSheet } from 'aphrodite'

if (typeof window !== 'undefined') {
  StyleSheet.rehydrate(window.__NEXT_DATA__.ids)
}