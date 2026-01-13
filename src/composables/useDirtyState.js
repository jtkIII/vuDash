// snapshots, compares, resets

import { ref, computed } from 'vue'

export function useDirtyState(sourceRef) {
    
  // Snapshot of last committed state
  const baseline = ref(serialize(sourceRef.value))

  // Dirty if current !== baseline
  const dirty = computed(() =>
    serialize(sourceRef.value) !== baseline.value
  )

  function commit() {
    baseline.value = serialize(sourceRef.value)
  }

  function reset() {
    sourceRef.value = deserialize(baseline.value)
  }

  return {
    dirty,
    commit,
    reset
  }
}

/* Helpers */
function serialize(value) {
  return JSON.stringify(value)
}

function deserialize(value) {
  return JSON.parse(value)
}
