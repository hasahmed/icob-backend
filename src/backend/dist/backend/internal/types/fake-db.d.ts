import { MemDb } from "./mem-db";
import { Instance, Workflow } from "../../model";
export declare class FakeDb extends MemDb<Workflow | Instance> {
    constructor();
}
export declare const FAKE_DB: FakeDb;
