import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { goBack } from "../../navigators/navigationUtilities"

interface AgentsScreenProps extends AppStackScreenProps<"Agents"> {}

export const AgentsScreen: FC<AgentsScreenProps> = observer(function AgentsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Header title="Agents" leftIcon="back" onLeftPress={() => goBack()} />
      <Text text="agents" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
