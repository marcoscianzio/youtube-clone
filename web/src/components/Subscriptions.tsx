import { Spinner, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { useMySubscriptionsQuery } from "../generated/graphql";

export default function Subscriptions() {
  const { data, loading } = useMySubscriptionsQuery();

  let component;

  if (loading) {
    component = <Spinner />;
  } else if (!data?.mySubscriptions) {
    component = null;
  } else {
    component = (
      <Fragment>
        <Text textStyle="sectionTitle">SUBSCRIPCIONES</Text>
        {data.mySubscriptions.length === 0 ? (
          <Text color="secondary">
            Actualmente no estás subscrito a ningún canal. ¡Subscribite ya!
          </Text>
        ) : (
          data.mySubscriptions.map((sub) => {
            return <pre>{JSON.stringify(sub, null, 2)}</pre>;
          })
        )}
      </Fragment>
    );
  }

  return <Stack>{component}</Stack>;
}
