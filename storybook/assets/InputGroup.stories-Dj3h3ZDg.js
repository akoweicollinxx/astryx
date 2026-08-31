import{aN as F,ai as s,a2 as e,c as O,a7 as P,ag as q,az as R,I as _}from"./iframe-DFGhi28E.js";import{F as B}from"./Field-kyKAi7Js.js";import{I as X}from"./groupStyles-CAQ23JVG.js";import{T as u}from"./TextInput-5IKFfrud.js";import{N as Y}from"./NumberInput-DRniW_8_.js";import{T as K}from"./TimeInput-fkdnfC1T.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-Cp-oGO3N.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./useInputContainer-B4pLK5dP.js";import"./timeParser-DHsJNTm3.js";const k={group:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx1qjc9v5",kWkggS:"astryxjbqb8w",$$css:!0},disabled:{kkrTdU:"astryx1h6gzvc",kSiTet:"astryxbyyjgo",$$css:!0}},Z={sm:{kZKoxP:"astryx6k0iem",$$css:!0},md:{kZKoxP:"astryx1ueg155",$$css:!0},lg:{kZKoxP:"astryxssyfek",$$css:!0}};function l({children:t,label:r,isLabelHidden:a=!1,description:o,isDisabled:i=!1,isOptional:d=!1,isRequired:j=!1,size:L,status:p,labelTooltip:D,xstyle:$,className:A,style:w,ref:z,"data-testid":U,...N}){const V=F(L,"md"),E=s.useId(),c=s.useId(),W=s.useId(),C=s.useId(),H=[o?W:null,p?.message?C:null].filter(Boolean).join(" ")||void 0,M=s.useMemo(()=>({isInGroup:!0,labelID:c,describedByIDs:H}),[c,H]);return e.jsx(X,{value:M,children:e.jsx(O,{value:V,children:e.jsx(B,{label:r,isLabelHidden:a,description:o,inputID:E,labelID:c,descriptionID:o?W:void 0,isGroupLabel:!0,isOptional:d,isRequired:j,isDisabled:i,status:p?{type:p.type,message:p.message,messageID:p.message?C:void 0}:void 0,statusVariant:"detached",labelTooltip:D,children:e.jsx("div",{ref:z,role:"group","aria-labelledby":c,"aria-describedby":H,"data-testid":U,...N,...P(R("input-group",{size:V,status:p?.type??null}),q(k.group,Z[V],i&&k.disabled,$),A,w),children:t})})})})}l.displayName="InputGroup";l.__docgenInfo={description:`Groups an input with prefix/suffix addons in a visually connected
container with shared border and focus ring.

@example
\`\`\`
<InputGroup label="Price">
  <InputGroupText>$</InputGroupText>
  <TextInput label="Price" isLabelHidden value={price} onChange={setPrice} />
</InputGroup>
\`\`\``,methods:[],displayName:"InputGroup",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the group container element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Input and addon children."},label:{required:!0,tsType:{name:"string"},description:"Label text for the group (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label.
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input group."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the group is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Default size for inputs in the group.
@default 'md'`},status:{required:!1,tsType:{name:"InputStatus"},description:"Status indicator applied to the group border."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text at the end of the label."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};const J={text:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kg3NbH:"astryxf314gf",kWkggS:"astryxwmxj5m",kMv6JI:"astryx9ynric",kGuDYH:"astryxjm74w1",kLWn49:"astryxw6l6zx",kMwMTN:"astryxv1l7n4",khDVqt:"astryxuxw1ft",kmuXW:"astryx2lah0s",kMzoRj:"astryx1litavf",ksu8eU:"astryx1y0btm7",kVAM5u:"astryxvy26l8",keTefX:"astryxd10s4z astryx1pwwqoy",krdFHd:"astryx15mokao astryx8eehn2",kVL7Gh:"astryxbiv7yw astryx1xrp5p4",kfmiAY:"astryx1ga7v0g astryx11xp8u1",kT0f0o:"astryx16uus16 astryx747jw7",$$css:!0}};function n({ref:t,children:r,xstyle:a,className:o,style:i,...d}){return e.jsx("div",{ref:t,...d,...P(R("input-group-text"),q(J.text,a),o,i),children:r})}n.displayName="InputGroupText";n.__docgenInfo={description:`A prefix or suffix text element for use inside InputGroup.

@example
\`\`\`
<InputGroup label="URL">
  <InputGroupText>https://</InputGroupText>
  <TextInput label="URL" isLabelHidden value={url} onChange={setUrl} />
</InputGroup>
\`\`\``,methods:[],displayName:"InputGroupText",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:`Content to render in the text slot.
Can be text or an icon.`}},composes:["Omit"]};const pe={title:"Core/InputGroup",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label"},description:{control:"text",description:"Description text"},isDisabled:{control:"boolean",description:"Disable the group"},size:{control:"radio",options:["sm","md","lg"],description:"Input size"}}},m={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Price"}},x={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(u,{label:"Weight",isLabelHidden:!0,value:r,onChange:a,placeholder:"0"}),e.jsx(n,{children:"kg"})]})},args:{label:"Weight"}},h={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"https://"}),e.jsx(u,{label:"URL",isLabelHidden:!0,value:r,onChange:a,placeholder:"example"}),e.jsx(n,{children:".com"})]})},args:{label:"Website"}},g={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:e.jsx(_,{icon:"search",size:"sm",color:"secondary"})}),e.jsx(u,{label:"Search",isLabelHidden:!0,value:r,onChange:a,placeholder:"Search..."})]})},args:{label:"Search",isLabelHidden:!0}},b={render:t=>{const[r,a]=s.useState(void 0);return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(Y,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Budget"}},I={render:t=>{const[r,a]=s.useState("09:00");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"Starts"}),e.jsx(K,{label:"Start time",isLabelHidden:!0,value:r,onChange:a,hourFormat:"24h",placeholder:"09:00"})]})},args:{label:"Schedule",description:"Use local time"}},f={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"@"}),e.jsx(u,{label:"Username",isLabelHidden:!0,value:r,onChange:a,placeholder:"username"})]})},args:{label:"Username",description:"Your public display name"}},v={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Price",status:{type:"error",message:"Price is required"}}},y={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Price",size:"sm"}},T={render:t=>{const[r,a]=s.useState("");return e.jsx("div",{style:{maxWidth:500},children:e.jsxs(l,{...t,children:[e.jsx(n,{children:"https://"}),e.jsx(u,{label:"URL",isLabelHidden:!0,value:r,onChange:a,placeholder:"example.com"})]})})},args:{label:"Website URL"}},G={render:t=>{const[r,a]=s.useState(""),[o,i]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(u,{label:"Address",isLabelHidden:!0,value:r,onChange:a,placeholder:"Address"}),e.jsx(n,{children:"@"}),e.jsx(u,{label:"Domain",isLabelHidden:!0,value:o,onChange:i,placeholder:"Domain"})]})},args:{label:"Email"}},S={render:()=>{const[t,r]=s.useState(""),[a,o]=s.useState(""),[i,d]=s.useState(""),[j,L]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsxs(l,{label:"Price",children:[e.jsx(n,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:t,onChange:r,placeholder:"0.00"})]}),e.jsxs(l,{label:"Website",children:[e.jsx(n,{children:"https://"}),e.jsx(u,{label:"URL",isLabelHidden:!0,value:a,onChange:o,placeholder:"example"}),e.jsx(n,{children:".com"})]}),e.jsxs(l,{label:"Weight",children:[e.jsx(u,{label:"Weight",isLabelHidden:!0,value:i,onChange:d,placeholder:"0"}),e.jsx(n,{children:"kg"})]}),e.jsxs(l,{label:"Price",status:{type:"error",message:"Price is required"},children:[e.jsx(n,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:j,onChange:L,placeholder:"0.00"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price'
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <TextInput label="Weight" isLabelHidden value={value} onChange={setValue} placeholder="0" />
        <InputGroupText>kg</InputGroupText>
      </InputGroup>;
  },
  args: {
    label: 'Weight'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>https://</InputGroupText>
        <TextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example" />
        <InputGroupText>.com</InputGroupText>
      </InputGroup>;
  },
  args: {
    label: 'Website'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>
          <Icon icon="search" size="sm" color="secondary" />
        </InputGroupText>
        <TextInput label="Search" isLabelHidden value={value} onChange={setValue} placeholder="Search..." />
      </InputGroup>;
  },
  args: {
    label: 'Search',
    isLabelHidden: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <NumberInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Budget'
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISOTimeString | undefined>('09:00' as ISOTimeString);
    return <InputGroup {...args}>
        <InputGroupText>Starts</InputGroupText>
        <TimeInput label="Start time" isLabelHidden value={value} onChange={setValue} hourFormat="24h" placeholder="09:00" />
      </InputGroup>;
  },
  args: {
    label: 'Schedule',
    description: 'Use local time'
  }
}`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>@</InputGroupText>
        <TextInput label="Username" isLabelHidden value={value} onChange={setValue} placeholder="username" />
      </InputGroup>;
  },
  args: {
    label: 'Username',
    description: 'Your public display name'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price',
    status: {
      type: 'error',
      message: 'Price is required'
    }
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price',
    size: 'sm'
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: 500
    }}>
        <InputGroup {...args}>
          <InputGroupText>https://</InputGroupText>
          <TextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example.com" />
        </InputGroup>
      </div>;
  },
  args: {
    label: 'Website URL'
  }
}`,...T.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');
    return <InputGroup {...args}>
        <TextInput label="Address" isLabelHidden value={left} onChange={setLeft} placeholder="Address" />
        <InputGroupText>@</InputGroupText>
        <TextInput label="Domain" isLabelHidden value={right} onChange={setRight} placeholder="Domain" />
      </InputGroup>;
  },
  args: {
    label: 'Email'
  }
}`,...G.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <InputGroup label="Price">
          <InputGroupText>$</InputGroupText>
          <TextInput label="Amount" isLabelHidden value={v1} onChange={setV1} placeholder="0.00" />
        </InputGroup>
        <InputGroup label="Website">
          <InputGroupText>https://</InputGroupText>
          <TextInput label="URL" isLabelHidden value={v2} onChange={setV2} placeholder="example" />
          <InputGroupText>.com</InputGroupText>
        </InputGroup>
        <InputGroup label="Weight">
          <TextInput label="Weight" isLabelHidden value={v3} onChange={setV3} placeholder="0" />
          <InputGroupText>kg</InputGroupText>
        </InputGroup>
        <InputGroup label="Price" status={{
        type: 'error',
        message: 'Price is required'
      }}>
          <InputGroupText>$</InputGroupText>
          <TextInput label="Amount" isLabelHidden value={v4} onChange={setV4} placeholder="0.00" />
        </InputGroup>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const de=["WithPrefix","WithSuffix","WithPrefixAndSuffix","WithIconPrefix","WithNumberInput","WithTimeInput","WithDescription","WithErrorStatus","SmallSize","FullWidth","TwoInputs","AllVariations"];export{S as AllVariations,T as FullWidth,y as SmallSize,G as TwoInputs,f as WithDescription,v as WithErrorStatus,g as WithIconPrefix,b as WithNumberInput,m as WithPrefix,h as WithPrefixAndSuffix,x as WithSuffix,I as WithTimeInput,de as __namedExportsOrder,pe as default};
