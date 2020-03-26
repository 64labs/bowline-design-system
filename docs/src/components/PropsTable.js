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
  useTheme,
} from "@64labs/bowline-design-system"

const UnionProp = ({ prop, name }) => {
  const theme = useTheme()
  const descriptionMatch = prop.description.match(/\[(.*)?\]/)

  let description = prop.description
  let namespace
  let responsive = true

  if (descriptionMatch) {
    description = description.replace(descriptionMatch[0], "").trim()
    namespace = descriptionMatch[1]
  }

  return (
    <Box>
      <Stack space="small">
        <Stack space="smallish">
          <Inline justify="space-between">
            <Inline space="xsmall">
              <Text weight="medium">{name}</Text>
              <Inline space="xxsmall">
                {namespace && (
                  <Box
                    paddingX="xxsmall"
                    borderRadius="standard"
                    style={{
                      boxShadow: `0 0 0 1px inset ${theme["base-colors"].promote}`,
                    }}
                  >
                    <Text
                      size="xsmall"
                      tone="promote"
                      weight="medium"
                      baseline={false}
                    >
                      {namespace}
                    </Text>
                  </Box>
                )}
              </Inline>
            </Inline>
            {responsive && (
              <Inline space="xxsmall">
                <Icon name="smartphone" size="small" tone="brandAccent" />
                <Icon name="monitor" size="small" tone="brandAccent" />
              </Inline>
            )}
          </Inline>

          <Text size="small" tone="secondary">
            {description}
          </Text>
        </Stack>

        {/* {namespace && (
          <Inline>
            <Box
              paddingX="xxsmall"
              borderRadius="standard"
              background="promoteLight"
            >
              <Text as="code" block size="small" baseline={false}>
                {namespace}
              </Text>
            </Box>
          </Inline>
        )} */}

        {!namespace && prop.type.value[0].name === "enum" && (
          <Inline space="xsmall">
            {prop.type.value[0].value.map(({ value }) => (
              <Box
                key={`${name}-${value}`}
                paddingX="xxsmall"
                borderRadius="standard"
                style={{
                  boxShadow: `0 0 0 1px inset #dfdfdfdf`,
                }}
              >
                <Text as="code" block size="small" baseline={false}>
                  {value.replace(/'/g, "")}
                </Text>
              </Box>
            ))}
          </Inline>
        )}
      </Stack>
    </Box>
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
              {propType.name === "union" && (
                <UnionProp prop={prop} name={propName} />
              )}
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
