---
name: "component"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name."
---

# `{{ inputs.name | pascal }}.tsx`

```typescript
import type { FC } from 'react'

type {{ inputs.name | pascal -}}ViewProps = {
} & {{ inputs.name | pascal -}}Props

const {{ inputs.name | pascal -}}View: FC<{{ inputs.name | pascal -}}ViewProps> = (props) => {
  return null
}

type {{ inputs.name | pascal -}}Props = {
}

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal -}}Props> = (props) => {
  return <{{ inputs.name | pascal -}}View {...props} />
}
```
