Shader "Mahjong/Specular"
{
	Properties
	{
		_MainTex ("Texture", 2D) = "white" {}
		_Diffuse ("Diffuse",Color) = (1,1,1,1)
		_Specular ("Specular",Color) = (1,1,1,1)
		_Gloss ("Gloss",Range(8,20)) = 8
	}
	SubShader
	{
		Tags { "RenderType"="Opaque" "LightMode" = "ForwardBase"}
		LOD 100

		Pass
		{
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			
			#include "UnityCG.cginc"
			#include "Lighting.cginc"

			struct appdata
			{
				float4 vertex : POSITION;
				float2 uv : TEXCOORD0;
				float3 normal : NORMAL;
			};

			struct v2f
			{
				float4 vertex : SV_POSITION;
				float2 uv : TEXCOORD0;
				float3 worldNormal : TEXCOORD1;
				float3 worldPos : TEXCOORD2;
			};

			sampler2D _MainTex;
			fixed3 _Diffuse;
			fixed3 _Specular;
			fixed  _Gloss;
			
			v2f vert (appdata v)
			{
				v2f o;
				o.vertex = UnityObjectToClipPos(v.vertex);
				o.uv = v.uv;
				o.worldNormal = mul((float3x3)unity_ObjectToWorld,v.normal);
				o.worldPos = mul((float3x3)unity_ObjectToWorld,v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i) : SV_Target
			{
				fixed3 col = tex2D(_MainTex, i.uv).rgb;
				fixed3 ambient = UNITY_LIGHTMODEL_AMBIENT.xyz;
				float3 worldNormal = normalize(i.worldNormal);
				float3 worldLightDir = normalize(UnityWorldSpaceLightDir(i.worldPos));
				float3 worldViewDir = normalize(UnityWorldSpaceViewDir(i.worldPos));

				fixed3 diffuse = _LightColor0.rgb * _Diffuse * saturate(dot(worldNormal,worldLightDir));
				
				float3 halfDir = normalize(worldLightDir + worldViewDir);
				fixed3 specular = _LightColor0 * _Specular * pow(max(0,dot(worldNormal , halfDir)),_Gloss);

				return fixed4(col * (ambient + diffuse + specular),1.0);
				
			}
			ENDCG
		}
	}

	Fallback "Specular"
}
