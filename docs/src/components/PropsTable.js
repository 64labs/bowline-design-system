import React from "react"
import {
  Box,
  Columns,
  Divider,
  Column,
  Text,
  Icon,
  Inline,
  Stack,
  VerticalDivider,
  tokens,
  useTheme,
} from "@64labs/bowline-design-system"

const PropValue = ({ value, token }) => {
  const theme = useTheme()

  if (token) {
    return (
      <Inline
        space="none"
        borderRadius="standard"
        overflow="hidden"
        style={{ border: `1px solid ${theme["base-colors"].promoteLight}` }}
      >
        <Box paddingX="xsmall" paddingY="xxsmall" background="promoteLight">
          <Text block size="small" tone="brandAccent">
            {value}
          </Text>
        </Box>
        <Box paddingX="xsmall" paddingY="xxsmall" background="white">
          <Text block size="small" tone="brandAccent">
            {token}
          </Text>
        </Box>
      </Inline>
    )
  }
  return (
    <Box
      paddingX="xsmall"
      paddingY="xxsmall"
      borderRadius="standard"
      background="promoteLight"
    >
      <Text block size="small" tone="brandAccent">
        {value}
      </Text>
    </Box>
  )
}

const Prop = ({ prop, name }) => {
  const descriptionMatch =
    prop.description && prop.description.match(/\[(.*)?\]/)
  const tokenMatch = prop.description && prop.description.match(/\{(\{.*\})\}/)

  const responsive = prop.type.name === "union"
  const hasDefaultValue = prop.defaultValue && prop.defaultValue.value
  let description = prop.description
  let namespace
  let tokens

  if (descriptionMatch) {
    description = description.replace(descriptionMatch[0], "").trim()
    namespace = descriptionMatch[1]
  }

  if (tokenMatch) {
    try {
      description = description.replace(tokenMatch[0], "").trim()
      tokens = JSON.parse(tokenMatch[1])
    } catch (err) {
      console.log(err)
    }
  }

  const responsiveType =
    responsive &&
    prop.type.value.find(item => {
      if (["string", "number", "enum"].includes(item.name)) {
        return true
      }
      return false
    })

  const type = responsiveType ? responsiveType.name : prop.type.name

  return (
    <Box>
      <Stack space="gutter">
        <Stack space="smallish">
          <Inline justify="space-between">
            <Inline space="xsmall">
              <Text weight="medium">{name}</Text>
            </Inline>

            <Inline space="smallish">
              {responsive && (
                <Inline space="xxsmall">
                  <Icon name="smartphone" size="small" tone="brandAccent" />
                  <Icon name="monitor" size="small" tone="brandAccent" />
                </Inline>
              )}
              <Inline space="xxsmall">
                <Text
                  size="xsmall"
                  tone={prop.required ? "critical" : "secondary"}
                >
                  {prop.required ? "required " : ""}
                  {type}
                </Text>
                {hasDefaultValue && (
                  <Icon name="chevron-right" size="small" tone="secondary" />
                )}
                {hasDefaultValue && (
                  <Text size="xsmall" tone="brand" weight="medium">
                    {prop.defaultValue.value}
                  </Text>
                )}
              </Inline>
            </Inline>
          </Inline>

          <Text size="small" tone="secondary">
            {description}
          </Text>
        </Stack>

        {namespace && (
          <Inline space="none">
            <Box
              paddingX="xsmall"
              paddingY="xxsmall"
              background="brandAccent"
              style={{ borderRadius: "3px 0 0 3px" }}
            >
              <Text block size="small">
                tokens
              </Text>
            </Box>
            <Box
              paddingX="xsmall"
              paddingY="xxsmall"
              background="promoteLight"
              style={{ borderRadius: "0 3px 3px 0" }}
            >
              <Text block size="small" tone="brandAccent">
                {namespace}
              </Text>
            </Box>
          </Inline>
        )}

        {!namespace &&
          prop.type.value &&
          prop.type.value[0].name === "enum" && (
            <Enum
              name={name}
              values={prop.type.value[0].value}
              tokens={tokens}
            />
          )}

        {!namespace && prop.type.name === "enum" && (
          <Enum name={name} values={prop.type.value} tokens={tokens} />
        )}
      </Stack>
    </Box>
  )
}

const Enum = ({ name, values, tokens = {} }) => {
  let range =
    typeof values === "string" &&
    values.includes("range") &&
    values.replace(/range/, "").replace("_", "...")

  return (
    <Inline space="xsmall">
      {Array.isArray(values) ? (
        values.map(({ value }) => {
          const displayValue = value.replace(/'/g, "")
          return (
            <PropValue
              key={`${name}-${value}`}
              value={displayValue}
              token={tokens[displayValue]}
            />
          )
        })
      ) : (
        <PropValue value={range || values} />
      )}
    </Inline>
  )
}

const PropsTable = ({ component }) => {
  if (!component || !component.__docgenInfo || !component.__docgenInfo.props) {
    return null
  }

  const doc = component.__docgenInfo

  const propKeys = Object.keys(doc.props)
  const sortedPropKeys = [...propKeys].sort()

  return (
    <Stack space="xlarge">
      <Text weight="strong" size="large">
        Component Props
      </Text>

      <Stack dividers>
        {propKeys.map(propName => {
          const prop = doc.props[propName]
          return (
            <React.Fragment key={propName}>
              <Prop prop={prop} name={propName} />
            </React.Fragment>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default PropsTable
