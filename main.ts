import PptxGenJS from 'pptxgenjs'

// fix needed because of bad types?
const PptxGen = PptxGenJS as unknown as { new (): any };
const ppt = new PptxGen()

