import Footer from "../components/Footer"
import Table from "../components/Table/Table"
import THead from "../components/Table/THead"
import TBody from "../components/Table/TBody"
import Tr from "../components/Table/Tr"
import Td from "../components/Table/Td"

export default function ExampleTable() {
  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Td>
              Propriedade 1
            </Td><Td>
              Propriedade 1
            </Td>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>
              Valor 1
            </Td>
            <Td>
              Valor 2
            </Td>
          </Tr>
          <Tr>
            <Td>
              Valor 1
            </Td>
            <Td>
              Valor 2
            </Td>
          </Tr>
        </TBody>
      </Table>
    </>
  )
}