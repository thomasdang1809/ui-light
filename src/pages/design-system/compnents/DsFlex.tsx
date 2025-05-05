import Section from "../../../components/containers/Section"
import Flex from "../../../components/layouts/Flex"
import Item from "../../../components/layouts/Item"


const DsFlex: React.FC = () => {
    return (
        <Section title="Display: Flex">
            <div className="ds-section-title">Flex System</div>
            <Flex>
                {
                    Array.from({ length: 12 }, (_, i) => {
                        return (
                            <Item className="col-1" key={i}>
                                <div className="column"></div>
                            </Item>
                        )
                    })
                }
                <Item className="col-12">
                    <div className="column">12</div>
                </Item>
                <Item className="col-1">
                    <div className="column">1</div>
                </Item>
                <Item className="col-11">
                    <div className="column">11</div>
                </Item>
                <Item className="col-2">
                    <div className="column">2</div>
                </Item>
                <Item className="col-10">
                    <div className="column">10</div>
                </Item>
                <Item className="col-3">
                    <div className="column">3</div>
                </Item>
                <Item className="col-9">
                    <div className="column">9</div>
                </Item>
                <Item className="col-4">
                    <div className="column">4</div>
                </Item>
                <Item className="col-8">
                    <div className="column">8</div>
                </Item>
                <Item className="col-5">
                    <div className="column">5</div>
                </Item>
                <Item className="col-7">
                    <div className="column">7</div>
                </Item>
                <Item className="col-6">
                    <div className="column">6</div>
                </Item>
                <Item className="col-6">
                    <div className="column">6</div>
                </Item>
                {
                    Array.from({ length: 3 }, (_, i) => {
                        return (
                            <Item className="col-4" key={i}>
                                <div className="column">4</div>
                            </Item>
                        )
                    })
                }
                {
                    Array.from({ length: 4 }, (_, i) => {
                        return (
                            <Item className="col-3" key={i}>
                                <div className="column">3</div>
                            </Item>
                        )
                    })
                }
                {
                    Array.from({ length: 6 }, (_, i) => {
                        return (
                            <Item className="col-2" key={i}>
                                <div className="column">2</div>
                            </Item>
                        )
                    })
                }
            </Flex>
            <Flex>
                <Item className="lg:col-4 sm:col-8">
                    Column 4
                </Item>
                <Item className="col-8">
                    Column 8
                </Item>
            </Flex>
        </Section>
    )
}

export default DsFlex