// snapshots, compares, resets
// usage: const { dirty, commit, reset } = useDirtyState(myRef)
// this could use some attention by a real programmer to handle edge cases, etc.
// works for basic use cases but is the most half-baked part of this dashboard

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

  return { dirty, commit, reset }
}

/* Helpers */
function serialize(value) {
  return JSON.stringify(value)
}

function deserialize(value) {
  return JSON.parse(value)
}
