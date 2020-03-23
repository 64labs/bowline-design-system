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
  tokens,
} from "@64labs/bowline-design-system"

const PropsTable = ({ component }) => {
  if (!component) {
    return null
  }
  const doc = component.__docgenInfo
  return (
    <Columns className="props-table">
      <Column span={1}>
        <Text tone="secondary" size="small">
          Name
        </Text>
      </Column>
      <Column span={1}>
        <Text tone="secondary" size="small">
          Type
        </Text>
      </Column>
      <Column span={1}>
        <Text tone="secondary" size="small">
          Responsive
        </Text>
      </Column>
      <Column span={1}>
        <Text tone="secondary" size="small">
          Description
        </Text>
      </Column>
      <Column span={4}>
        <Divider />
      </Column>

      {doc &&
        doc.props &&
        Object.keys(doc.props).map(propName => {
          const prop = doc.props[propName]

          const propValues =
            prop.type &&
            prop.type.name !== "union" &&
            (tokens[
              prop.type.value &&
                !Array.isArray(prop.type.value) &&
                prop.type.value.replace("types.", "").replace("tokens.", "")
            ] ||
              tokens[
                prop.type.raw &&
                  prop.type.raw.replace("types.", "").replace("tokens.", "")
              ] ||
              prop.type.value)

          const propOneOf =
            prop.type &&
            prop.type.name === "union" &&
            prop.type.value.find(v => v.name === "arrayOf")

          return (
            <React.Fragment key={propName}>
              <Column span={1}>
                <Text weight="medium" size="small">
                  {propName}
                </Text>
              </Column>
              <Column span={1}>
                {propValues ? (
                  <Inline space="smallish">
                    {propValues.map(val => (
                      <Text
                        as="code"
                        key={`${propName}-${val.value || val}`}
                        baseline={false}
                        size="small"
                      >
                        {val.value ? val.value.replace(/'/g, "") : val}
                      </Text>
                    ))}
                  </Inline>
                ) : (
                  <Text size="small">
                    {prop.type && prop.type.name === "union"
                      ? propOneOf
                        ? propOneOf.value.name
                        : prop.type.value.map(v => v.name).join(", ")
                      : prop.type && prop.type.name}
                  </Text>
                )}
              </Column>
              <Column span={1}>
                {prop.type && (prop.type.name === "custom" || propOneOf) ? (
                  <Box paddingLeft="gutter">
                    <Icon name="check" />
                  </Box>
                ) : null}
              </Column>
              <Column span={1}>
                <Stack space="small">
                  {prop.description && (
                    <Text size="small">{prop.description}</Text>
                  )}
                  {prop.defaultValue &&
                    prop.defaultValue.value !== "undefined" && (
                      <Text size="small">
                        Default:{" "}
                        <Text as="code" size="small" baseline={false}>
                          {prop.defaultValue.value.replace(/'/g, "")}
                        </Text>
                      </Text>
                    )}
                </Stack>
              </Column>
              <Column span={4}>
                <Divider />
              </Column>
            </React.Fragment>
          )
        })}
    </Columns>
  )
}

export default PropsTable
