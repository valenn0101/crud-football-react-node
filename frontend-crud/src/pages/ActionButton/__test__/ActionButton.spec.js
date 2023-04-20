    it("Render Button",() => {
        const url = "https://example.com";
        const type = "primary";
        const name = "Click me";

        const wrapper = shallow(<ActionButton url={url} type={type} name={name} />);

        const anchor = wrapper.find('a');

        expect(anchor.prop('href')).toEqual(url);
        expect(anchor.prop('className')).toEqual(`btn btn-outline-${type}`);
        expect(anchor.text()).toEqual(name);
    });