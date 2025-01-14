export interface XMLDataBinding {
  ElementPath: string;
}

export interface XMLColumnMap {
  DataBinding: XMLDataBinding;
}

export interface XMLSchemaRef {
  Namespace: string;
  ElementName: string;
}

export interface XMLMap {
  SchemaRef: XMLSchemaRef;
  Map: Record<string, XMLColumnMap>;
}
