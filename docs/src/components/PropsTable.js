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

const PropValue = ({ value }) => {
  return (
    <Box
      paddingX="xsmall"
      paddingY="xxsmall"
      borderRadius="standard"
      background="subtle"
    >
      <Text block size="small">
        {value}
      </Text>
    </Box>
  )
}

const Prop = ({ prop, name }) => {
  const theme = useTheme()
  const descriptionMatch =
    prop.description && prop.description.match(/\[(.*)?\]/)

  const responsive = prop.type.name === "union"
  const hasDefaultValue = prop.defaultValue && prop.defaultValue.value
  let description = prop.description
  let namespace

  if (descriptionMatch) {
    description = description.replace(descriptionMatch[0], "").trim()
    namespace = descriptionMatch[1]
  }

  return (
    <Box>
      <Stack space="small">
        <Stack space="xsmall">
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
                  {prop.type.name}
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
                theme
              </Text>
            </Box>
            <Box
              paddingX="xsmall"
              paddingY="xxsmall"
              background="subtle"
              style={{ borderRadius: "0 3px 3px 0" }}
            >
              <Text block size="small">
                {namespace}
              </Text>
            </Box>
          </Inline>
        )}

        {!namespace &&
          prop.type.value &&
          prop.type.value[0].name === "enum" && (
            <Enum name={name} values={prop.type.value[0].value} />
          )}

        {!namespace && prop.type.name === "enum" && (
          <Enum name={name} values={prop.type.value} />
        )}
      </Stack>
    </Box>
  )
}

const Enum = ({ name, values }) => {
  return (
    <Inline space="xsmall">
      {values.map(({ value }) => (
        <PropValue key={`${name}-${value}`} value={value.replace(/'/g, "")} />
      ))}
    </Inline>
  )
}

const PropsTable = ({ component }) => {
  if (!component || !component.__docgenInfo || !component.__docgenInfo.props) {
    return null
  }

  const doc = component.__docgenInfo

  console.log(doc.props)

  return (
    <Stack space="xlarge">
      <Text weight="strong" size="large">
        Component Props
      </Text>

      <Stack dividers>
        {Object.keys(doc.props).map(propName => {
          const prop = doc.props[propName]
          const propType = prop.type

          return (
            <React.Fragment key={propName}>
              <Prop prop={prop} name={propName} />
            </React.Fragment>
          )
        })}
      </Stack>
    </Stack>
  )

  // return (
  //   <Columns className="props-table" cols={4}>
  //     <Column span={1}>
  //       <Text tone="secondary" size="small">
  //         Name
  //       </Text>
  //     </Column>
  //     <Column span={1}>
  //       <Text tone="secondary" size="small">
  //         Type
  //       </Text>
  //     </Column>
  //     <Column span={1}>
  //       <Text tone="secondary" size="small">
  //         Responsive
  //       </Text>
  //     </Column>
  //     <Column span={1}>
  //       <Text tone="secondary" size="small">
  //         Description
  //       </Text>
  //     </Column>
  //     <Column span={4}>
  //       <Divider />
  //     </Column>

  //     {doc &&
  //       doc.props &&
  //       Object.keys(doc.props).map(propName => {
  //         const prop = doc.props[propName]

  //         const propValues =
  //           prop.type &&
  //           prop.type.name !== "union" &&
  //           (tokens[
  //             prop.type.value &&
  //               !Array.isArray(prop.type.value) &&
  //               prop.type.value.replace("types.", "").replace("tokens.", "")
  //           ] ||
  //             tokens[
  //               prop.type.raw &&
  //                 prop.type.raw.replace("types.", "").replace("tokens.", "")
  //             ] ||
  //             prop.type.value)

  //         const propOneOf =
  //           prop.type &&
  //           prop.type.name === "union" &&
  //           prop.type.value.find(v => v.name === "arrayOf")

  //         return (
  //           <React.Fragment key={propName}>
  //             <Column span={1}>
  //               <Text weight="medium" size="small">
  //                 {propName}
  //               </Text>
  //             </Column>
  //             <Column span={1}>
  //               {propValues ? (
  //                 <Inline space="smallish">
  //                   {propValues.map(val => (
  //                     <Text
  //                       as="code"
  //                       key={`${propName}-${val.value || val}`}
  //                       baseline={false}
  //                       size="small"
  //                     >
  //                       {val.value ? val.value.replace(/'/g, "") : val}
  //                     </Text>
  //                   ))}
  //                 </Inline>
  //               ) : (
  //                 <Text size="small">
  //                   {prop.type && prop.type.name === "union"
  //                     ? propOneOf
  //                       ? propOneOf.value.name
  //                       : prop.type.value.map(v => v.name).join(", ")
  //                     : prop.type && prop.type.name}
  //                 </Text>
  //               )}
  //             </Column>
  //             <Column span={1}>
  //               {prop.type && (prop.type.name === "custom" || propOneOf) ? (
  //                 <Box paddingLeft="gutter">
  //                   <Icon name="check" />
  //                 </Box>
  //               ) : null}
  //             </Column>
  //             <Column span={1}>
  //               <Stack space="small">
  //                 {prop.description && (
  //                   <Text size="small">{prop.description}</Text>
  //                 )}
  //                 {prop.defaultValue &&
  //                   prop.defaultValue.value !== "undefined" && (
  //                     <Text size="small">
  //                       Default:{" "}
  //                       <Text as="code" size="small" baseline={false}>
  //                         {prop.defaultValue.value.replace(/'/g, "")}
  //                       </Text>
  //                     </Text>
  //                   )}
  //               </Stack>
  //             </Column>
  //             <Column span={4}>
  //               <Divider />
  //             </Column>
  //           </React.Fragment>
  //         )
  //       })}
  //   </Columns>
  // )
}

export default PropsTable
