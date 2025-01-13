"use client";

import { ApolloProvider } from "@apollo/client";
import client from "./apolloclient";

export default function ClientApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
