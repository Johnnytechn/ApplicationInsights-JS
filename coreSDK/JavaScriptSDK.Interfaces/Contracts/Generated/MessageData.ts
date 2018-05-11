// THIS FILE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
/// <reference path="SeverityLevel.ts" />
module AI
{
"use strict";
    
    /**
     * Instances of Message represent printf-like trace statements that are text-searched. Log4Net, NLog and other text-based log file entries are translated into intances of this type. The message does not have measurements.
     */
    export class MessageData extends Microsoft.Telemetry.Domain
    {
        
        /**
         * Schema version
         */
        public ver: number;
        
        /**
         * Trace message
         */
        public message: string;
        
        /**
         * Trace severity level.
         */
        public severityLevel: AI.SeverityLevel;
        
        /**
         * Collection of custom properties.
         */
        public properties: any;
        
        constructor()
        {
            super();
            
            this.ver = 2;
            this.properties = {};
        }
    }
}